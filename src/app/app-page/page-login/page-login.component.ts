import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services"
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
    let key = window.sessionStorage.getItem("key")
    let url = window.location.search
    if (!url || !key) {
      window.location.href = window.location.origin + "/#"
      return
    }
    let m = url.split("=")
    let code = m[1]
    if (code) {
      this.service.getAccess_Token(code, key).subscribe((data) => {
        if (data) {
          window.close()
        }
      })
    }
  }

}
