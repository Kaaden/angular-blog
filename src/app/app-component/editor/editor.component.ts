import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import emoji from "../../emoji";
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  visible: boolean = false
  emojiArray: Array<string> = []
  value: string = ""
  @Input() show
  @Input() isShow
  @Input() itemBody
  @Input() loading
  @Output() doSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
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
    this.doSubmit.emit({ value: this.value, item: this.itemBody });
    this.value = ""
  }
  @HostListener("window:click", ["$event"])
  doClick(e) {
    console.log(e)
  }

}
