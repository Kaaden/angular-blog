import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.less']
})
export class AboutComponent implements OnInit {
  user: any = ""
  constructor() { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    let that = this
    const fetchUser = setInterval(() => {
      let user = window.sessionStorage.getItem("user")
      if (user) {
        user = JSON.parse(user)
        that.user = user
        clearInterval(fetchUser)
      }
    }, 100)
  }

}
