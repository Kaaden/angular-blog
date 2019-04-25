import { Component, OnInit, HostListener } from "@angular/core";
import { AppService } from "../../app-services";
import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";
@Component({
  selector: "app-component-list",
  templateUrl: "./component-list.component.html",
  styleUrls: ["./component-list.component.less"]
})
export class ListComponent implements OnInit {
  list: any[] = [];
  page: number = 1;
  fetch: boolean = false;
  loading: boolean = true;
  constructor(
    private appService: AppService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getContent(this.page);
  }

  goDetail(id: number): void {
    this.router.navigate(["detail"], {
      queryParams: { id }
    })
  }
  onError(e) {
    e.target.src = "../../../assets/pic.png"
  }
  getContent(page: number): void {
    this.appService.getContent(page).subscribe(
      data => {
        if (data.isok) {
          this.list = [...this.list, ...data.data];
          this.fetch = false;
          this.loading = false
        } else {
          this.fetch = true;
          this.loading = false
        }
      },
      (error: Error) => {
        this.message.create("error", "请求错误");
        this.fetch = false;
        this.loading = false
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
