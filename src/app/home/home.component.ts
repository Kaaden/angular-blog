import { Component, OnInit } from '@angular/core';
import { AppService } from "../app-services"
import { Config } from "../app-main"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  BgImg: string
  HomeConfig: Config = {
    title: "",
    desc: "",
  }
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getBings()
    this.getCofing()
  }
  getBings(): void {
    this.appService.getBing()
      .subscribe(
        (data: any) => { this.BgImg = data.isok ? data.url : "" },
        (error: Error) => { this.BgImg = "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg" });
  }
  getCofing(): void {
    this.appService.getConfig()
      .subscribe(
        (data) => {
          if (data.isok) {
            this.HomeConfig.title = data.data.hometitle
            this.HomeConfig.desc = data.data.homelevel
          }
        },
        (error: Error) => {
          this.HomeConfig.title = "Kaaden Blog"
          this.HomeConfig.desc = "艺术创造者：冰与火之歌"
        })
  }

}
