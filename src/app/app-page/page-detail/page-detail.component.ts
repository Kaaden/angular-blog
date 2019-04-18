import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../../app-services"
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.less']
})
export class PageDetailComponent implements OnInit {
  title: string = ""
  category: string = ""
  content: string = ""
  time: string = ""
  authors: string = ""
  backImg: string = ""
  loading: boolean = true
  User: any = ""
  interId: any = ""
  gitId: string = ""
  gitUser: any = ""
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AppService,
  ) { }

  ngOnInit() {
    window.onbeforeunload = function (event) {
      window.sessionStorage.clear()
    }
    this.activatedRoute.queryParams.subscribe(query => {
      let id = query.id || 0
      if (id) {
        window.sessionStorage.setItem("contentId", id)
        this.getDetail(id)
      }
    });
  }
  ngOnDestroy() {
    window.sessionStorage.setItem("contentId", "")
  }

  getDetail(id: number): void {
    this.service.getDetail(id).subscribe(
      (data => {
        if (data.isok) {
          this.title = data.data.title
          this.backImg = data.data.img

          this.category = data.data.category
          this.content = data.data.content.replace(/↵/g, "");

          this.time = data.data.time
          this.authors = data.data.authors
          this.getUser();
        }
        this.loading = false
      }),
      (error: Error) => {
        this.loading = false
      }
    )
  }
  getUser(): void {
    let user = window.sessionStorage.getItem("user")
    if (user) {
      this.User = JSON.parse(user)
      this.loading = false
      return
    }
    this.service.getUser().subscribe(
      data => {
        if (data.isok) {
          this.User = data.data;
          window.sessionStorage.setItem("user", JSON.stringify(data.data))
        }
        this.loading = false
      },
      (error: Error) => {
        this.User = "";
        this.loading = false
      }
    );
  }


}
