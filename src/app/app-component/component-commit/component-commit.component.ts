import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services"
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-component-commit',
    templateUrl: './component-commit.component.html',
    styleUrls: ['./component-commit.component.less']
})
export class commitComponent implements OnInit {
    gitId: string = ""
    gitUser: any = ""
    interId: any = ""
    pageindex: number = 1
    comment: Array<any> = []
    contentId: string = ""
    loading: boolean = false


    hasMore: boolean = true

    constructor(
        private service: AppService,
        private message: NzMessageService
    ) { }

    ngOnInit() {
        const contentId = window.sessionStorage.getItem("contentId")
        if (!contentId) {
            return
        }
        this.contentId = contentId
        this.getUserId()
        this.getComment(false)
    }

    ngOnDestroy() {
        clearInterval(this.interId)
    }

    commontChange(id: any): void {
        this.service.findComment(id).subscribe((data) => {
            if (data.isok) {
                const index = this.comment.findIndex(f => f.id === data.data.id)
                if (index !== -1) {
                    this.comment[index] = data.data
                }
            }
        })
    }
    changeDzCount(para: any): void {
        this.service.findDzCount(para).subscribe((data) => {
            if (data.isok) {
                if (para.type === "comment") {
                    const index = this.comment.findIndex(f => f.id === data.data.id)
                    if (index !== -1) {
                        this.comment[index].dzcount = data.data.dzcount
                    }
                }
                if (para.type === "comment_re") {
                    const i = this.comment.findIndex(f => f.id === data.data.comment_id)
                    if (i !== -1) {
                        const j = this.comment[i].replay.findIndex(f => f.id === data.data.id)
                        if (j !== -1) {
                            this.comment[i].replay[j].dzcount = data.data.dzcount
                        }
                    }
                }
            }
        })
    }

    // 获取评论列表
    getComment(isFresh: boolean): void {
        this.loading = true
        if (isFresh) {
            this.pageindex = 1
        }
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
        this.getComment(false)
    }

    //登陆
    login(): void {
        const key = this.makeKey()
        window.sessionStorage.setItem("key", key)
        window.localStorage.clear()
        window.open('https://github.com/login/oauth/authorize\?client_id=a81d2df07a5f4265c4a0', '', 'width=600,height=500,left=10, top=10,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');
    }
    getUserId(): void {
        clearInterval(this.interId)
        const id = window.localStorage.getItem("gitId")
        if (!id) {
            this.interId = setInterval(() => {
                const gid = window.localStorage.getItem("gitId")
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
        const _d = new Date()
        let strMath = ""
        for (let i = 0; i < 4; i++) {
            let math = Math.floor(Math.random() * len - 1)
            if (math < 0) {
                math = 0
            }
            strMath += str.substr(math, 1)
        }
        return  _d.getTime() + strMath
    }

}