import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services";

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.less']
})
export class AboutComponent implements OnInit {
  user: any = ""
  imglist: Array<any> = []
  constructor(private service: AppService) { }

  ngOnInit() {
    this.findImg()
    this.getUser()

  }

  getUser() {
    const that = this
    const fetchUser = setInterval(() => {
      let user = window.sessionStorage.getItem("user")
      if (user) {
        user = JSON.parse(user)
        that.user = user
        clearInterval(fetchUser)
      }
    }, 100)
  }
  findImg() {
    this.service.findImg().subscribe(
      (data) => {
        if (data.isok) {
          this.imglist = data.data
        }
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }
  onError(e) {
    e.target.src = "../../../assets/pic.png"
  }


}
