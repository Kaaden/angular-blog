import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppService } from "../../app-services"
import emoji from "../../emoji";
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  visible: boolean = false
  visibleRe: boolean = false
  loading: boolean = false
  emojiArray: Array<string> = []
  value: string = ""
  isDz: boolean = false
  @Input() isShow;
  @Input() itemBody
  @Input() commentType
  @Input() user
  @Output() comment = new EventEmitter<any>();
  @Output() changeDz = new EventEmitter<any>();
  constructor(
    private service: AppService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    const item = this.itemBody
    if (item && item.dzuserid) {
      let dzlist
      try {
        dzlist = item.dzuserid.join(",")
      } catch (err) {
        dzlist = [item.dzuserid]
      }
      const index = dzlist.findIndex(f => f === `${this.user.id}`)
      if (index !== -1) {
        this.isDz = true
      }
    }
    this.emojiDo()
  }

  // 表情处理
  emojiDo(): void {
    this.emojiArray = Object.keys(emoji.EMOJI_MAP)
  }

  doEmoji(): void {
    this.visible = true
  }
  emojiClick(item: string): void {
    this.value = this.value + item
    this.visible = false
  }
  // 提交
  submit(): void {
    const contentId = window.sessionStorage.getItem("contentId")
    if (!contentId) {
      return
    }
    const { value, commentType, itemBody, user } = this
    if (!user) {
      this.message.error("请先登陆")
      return
    }
    const para = {
      "self": {
        userid: user.id,
        name: user.name,
        avatar: user.avatar_url,
        contentId: contentId,
        text: value
      },
      "first": {
        comment_name: user.name,
        comment_avatar: user.avatar_url,
        comment_text: value,

        comment_userid: user.id,
        replay_id: itemBody && itemBody.userid,
        replay_name: itemBody && itemBody.name,
        comment_id: itemBody && itemBody.id,
      },
      "second": {
        comment_name: user.name,
        comment_avatar: user.avatar_url,
        comment_text: value,

        replay_id: itemBody && itemBody.comment_userid,
        replay_name: itemBody && itemBody.comment_name,
        comment_id: itemBody && itemBody.comment_id,
        comment_userid: user.id
      }
    }
    const item = para[commentType]
    if (item) {
      this.loading = true
      if (commentType === "self") {
        this.selfRe(item)
      } else {
        this.getReplay(item)
      }
    }


  }

  showReplay(): void {
    if (!this.user) {
      this.message.error("请先登陆")
      return
    }
    this.visibleRe = !this.visibleRe
  }

  selfRe(para: any): void {
    this.service.addComment(para).subscribe(
      (data) => {
        this.loading = false
        this.value = ""
        if (!data.isok) {
          this.message.error("提交失败")
          return
        }
        this.comment.emit(true)

      },
      (error: Error) => {
        this.loading = false
      })
  }
  // 回评请求
  getReplay(para: any): void {
    this.service.addReplay(para).subscribe(
      (data) => {
        this.loading = false
        this.value = ""
        if (!data.isok) {
          this.message.error("提交失败")
          return
        }
        this.comment.emit(para.comment_id)

      },
      (error: Error) => {
        this.loading = false
      })
  }
  Dodz() {
    const { commentType, itemBody, user } = this
    if (!user) {
      this.message.error("请先登陆")
      return
    }
    this.isDz = !this.isDz
    console.log(user)
    const para = {
      id: itemBody.id,
      type: commentType === "first" ? "comment" : "comment_re",
      hasDz: this.isDz ? 1 : 0,
      userid: user.id
    }
    this.service.changeDz(para).subscribe(
      (data) => {
        if (data.isok) {
          this.changeDz.emit({ id: itemBody.id, type: para.type })
        }
      },
      (error: Error) => {
        console.log(error)
      })
  }
}
