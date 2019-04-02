import { Component, OnInit } from '@angular/core';
import { AppService } from "../app-services"
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  list: any[] = []
  constructor(private appService: AppService, private message: NzMessageService) { }

  ngOnInit() {
    this.getContent()
  }
  getContent(): void {
    this.appService.getContent(1)
      .subscribe(
        (data) => {
          if (data.isok) {
            this.list = data.list
            this.message.info('This is a normal message');
          }
        },
        (error: Error) => {
          this.message.create("error", "请求错误");
        })
  }
}
