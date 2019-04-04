import { Component, OnInit, HostListener } from "@angular/core";
import { AppService } from "../app-services";
import { NzMessageService } from "ng-zorro-antd";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"]
})
export class ListComponent implements OnInit {
  list: any[] = [];
  page: number = 1;
  fetch: boolean = false;
  constructor(
    private appService: AppService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.getContent(this.page);
  }

  getContent(page: number): void {
    this.appService.getContent(page).subscribe(
      data => {
        if (data.isok) {
          this.list = [...this.list, ...data.list];
          this.fetch = false;
        } else {
          this.fetch = true;
        }
      },
      (error: Error) => {
        this.message.create("error", "请求错误");
        this.fetch = false;
      }
    );
  }
  @HostListener("window:scroll", ["$event"])
  onScroll(e) {
    let body = document.documentElement;
    let scrollTop = body.scrollTop;
    let scrollBottom = body.scrollHeight - body.clientHeight;
    if (scrollTop >= scrollBottom) {
      if (!this.fetch) {
        this.fetch = true;
        this.page = this.page + 1;
        this.getContent(this.page);
      }
    }
  }
}
