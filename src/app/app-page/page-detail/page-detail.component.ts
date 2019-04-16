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
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AppService
  ) { }

  ngOnInit() {
    window.onbeforeunload = function (event) {
      window.sessionStorage.clear()
    }
    this.activatedRoute.queryParams.subscribe(query => {
      let id = query.id || 0
      if (id) {
        this.getDetail(id)
      }
    });
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
  login() {
    let key = this.makeKey()
    window.sessionStorage.setItem("key", key)
    window.open('https://github.com/login/oauth/authorize\?client_id=a81d2df07a5f4265c4a0', '', 'width=600,height=500,left=10, top=10,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');
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
