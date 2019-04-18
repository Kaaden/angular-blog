import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services"
import { NzMessageService } from 'ng-zorro-antd';
import emoji from "../../emoji";
@Component({
    selector: 'app-component-commit',
    templateUrl: './component-commit.component.html',
    styleUrls: ['./component-commit.component.less']
})
export class commitComponent implements OnInit {
    gitId: string = ""
    gitUser: any = ""
    interId: any = ""
    value: string = ""
    visible: boolean = false
    emojiArray: Array<string> = []
    pageindex: number = 1
    comment: Array<any> = []
    contentId: string = ""
    loading: boolean = false
    subLoading: boolean = false
    subLoadingItem: boolean = false
    hasMore: boolean = true
    replayIndex: number = 0
    replayValue: string = ""
    newReIndex: number = 0
    newValue: string = ""
    newReId: any = ""
    constructor(
        private service: AppService,
        private message: NzMessageService
    ) { }

    ngOnInit() {
        let contentId = window.sessionStorage.getItem("contentId")
        if (!contentId) {
            return
        }
        this.contentId = contentId
        this.getUserId()
        this.emojiDo()
        this.getComment(false)
    }

    ngOnDestroy() {
        clearInterval(this.interId)
    }

    showEmoji(): void {
        this.visible = true
    }

    // 表情处理
    emojiDo(): void {
        this.emojiArray = Object.keys(emoji.EMOJI_MAP)
    }

    emojiClick(item): void {
        if (!this.replayIndex) {
            this.value = this.value + item
        } else {
            this.replayValue = this.replayValue + item
        }
        this.visible = false
    }
    // 提交评论
    submit(): void {
        if (!this.value) {
            return
        }
        this.subLoading = true
        let user = this.gitUser
        let para = {
            userid: user.id,
            name: user.name,
            avatar: user.avatar_url,
            contentId: this.contentId,
            text: this.value
        }
        this.service.addComment(para).subscribe(
            (data) => {
                this.subLoading = false
                if (!data.isok) {
                    this.message.error("提交失败")
                    return
                }
                this.value = ""
                this.pageindex = 1
                this.getComment(true)
            },
            (error: Error) => {
                this.subLoading = false
            })
    }

    // 获取评论列表
    getComment(isFresh: boolean): void {
        this.loading = true
        this.service.getComment(this.pageindex, this.contentId).subscribe(
            (data) => {
                this.hasMore = data.isok
                if (data.isok) {
                    if (!isFresh) {
                        this.comment = [...this.comment, ...data.data]
                    } else {
                        this.comment = data.data
                    }
                }
                this.loading = false
            },
            (error: Error) => {
                this.hasMore = false
                this.comment = []
                this.loading = false
            })
    }
    // 加载更多
    fetchMore(): void {
        this.pageindex = this.pageindex + 1
        this.onblur()
        this.getComment(false)
    }
    // 回评
    showReplay(i: number): void {
        this.onNewBlur()
        const index = i + 1
        if (index === this.replayIndex) {
            this.replayIndex = 0
            this.replayValue = ""
        } else {
            this.replayIndex = index
        }
    }
    showNewRe(i: number, selId): void {
        this.onblur()
        const index = i + 1
        if (index === this.newReIndex) {
            this.newReIndex = 0
            this.newReId = ""
            this.newValue = ""
        }
        else {
            this.newReIndex = index
            this.newReId = selId
        }
    }
    onNewBlur() {
        this.newReIndex = 0
        this.newReId = ""
        this.newValue = ""
    }

    onblur(): void {
        this.replayIndex = 0
        this.replayValue = ""
    }

    // 回评提交
    replaySubmit(item: any): void {
        if (!this.replayValue) {
            return
        }
        this.subLoadingItem = true
        const user = this.gitUser
        let para = {
            comment_name: user.name,
            comment_avatar: user.avatar_url,
            comment_text: this.replayValue,
            replay_id: item.userid,
            replay_name: item.name,
            comment_id: item.id,
            comment_userid: user.id
        }
        this.getReplay(para)

    }
    newSubmit(item): void {
        if (!this.newValue) {
            return
        }
        const user = this.gitUser
        let para = {
            comment_name: user.name,
            comment_avatar: user.avatar_url,
            comment_text: this.newValue,

            replay_id: item.comment_userid,
            replay_name: item.comment_name,
            comment_id: item.comment_id,

            comment_userid: user.id
        }
        this.getReplay(para)
    }
    // 回评请求
    getReplay(para: any): void {
        this.service.addReplay(para).subscribe(
            (data) => {
                this.subLoadingItem = false
                if (!data.isok) {
                    this.message.error("提交失败")
                    return
                }
                this.replayValue = ""
                this.replayIndex = 0
                this.newReIndex = 0
                this.newValue = ""
                this.service.findComment(para.comment_id).subscribe((data) => {
                    if (data.isok) {
                        let index = this.comment.findIndex(f => f.id === data.data.id)
                        if (index !== 0) {
                            this.comment[index] = data.data
                        }
                    }
                })
            },
            (error: Error) => {
                this.subLoadingItem = false
            })
    }

    //登陆
    login(): void {
        let key = this.makeKey()
        window.sessionStorage.setItem("key", key)
        window.localStorage.clear()
        window.open('https://github.com/login/oauth/authorize\?client_id=a81d2df07a5f4265c4a0', '', 'width=600,height=500,left=10, top=10,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');
    }
    getUserId(): void {
        clearInterval(this.interId)
        let id = window.localStorage.getItem("gitId")
        if (!id) {
            this.interId = setInterval(() => {
                let gid = window.localStorage.getItem("gitId")
                if (gid) {
                    this.gitId = gid
                    this.getLogin(gid)
                    clearInterval(this.interId)
                }
            }, 100)
        } else {
            this.gitId = id
            this.getLogin(id)
        }
    }
    getLogin(id: any): void {
        this.service.getGit(id).subscribe(
            (data) => {
                if (data.isok) {
                    this.gitUser = data.data
                }
            },
            (error: Error) => {
                this.gitUser = ""
                this.gitId = ""
                this.message.error("请重新登陆")
            })
    }
    makeKey() {
        const str = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM"
        const len = str.length
        let _d = new Date()
        let strMath = ""
        for (let i = 0; i < 4; i++) {
            let math = Math.floor(Math.random() * len - 1)
            if (math < 0) {
                math = 0
            }
            strMath += str.substr(math, 1)
        }
        let dataMath = _d.getTime() + strMath
        return dataMath
    }
}