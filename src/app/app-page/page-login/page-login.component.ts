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
    console.log(window.location)
    let url = window.location.search
    if (!url) {
      window.location.href = window.location.origin + "/#"
      return
    }
    let m = url.split("=")
    let code = m[1]
    if (code) {
      console.log(code)
      this.service.getAccess_Token(code).subscribe((data)=>{
        console.log(data)
      })
    }
  }

}
