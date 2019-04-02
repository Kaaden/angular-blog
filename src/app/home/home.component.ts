import { Component, OnInit } from '@angular/core';
import { AppService } from "../app-services"
import { BgAvatar } from "../app-main"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  Img: BgAvatar["url"] = ""
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getBings()
  }
  getBings(): void {
    this.appService.getBing()
      .subscribe(data => this.Img = data.isok ? data.url : "");
  }
}
