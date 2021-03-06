import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app-services";
import { Config } from "../../app-main";
import { PlatformLocation } from "@angular/common";
@Component({
  selector: "app-component-head",
  templateUrl: "./component-head.component.html",
  styleUrls: ["./component-head.component.less"]
})
export class HeadBgComponent implements OnInit {
  BgImg: string;
  pageConfig: Config = {
    title: "",
    desc: "",
    bg: ""
  };
  constructor(
    private appService: AppService,
    private location: PlatformLocation
  ) { }

  ngOnInit() {
    this.getPagePre();
  }
  goUp(): void {
    document.documentElement.scrollTop = document.getElementById(
      "head-bg"
    ).clientHeight;
  }
  getPagePre(): void {
    let hash = this.location.hash;
    if (hash === "#/") {
      this.getBings();
    }
    this.getCofing();
  }
  getBings(): void {
    this.appService.getBing().subscribe(
      (data: any) => {
        this.pageConfig.bg = data.isok ? data.data : "";
      },
      (error: Error) => {
        this.pageConfig.bg =
          "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg";
      }
    );
  }
  getCofing(): void {
    this.appService.getConfig().subscribe(
      data => {
        if (data.isok) {
          this.getPage(data.data);
        }
      },
      (error: Error) => {
        this.pageConfig.title = "Kaaden Blog";
        this.pageConfig.desc = "艺术创造者：冰与火之歌";
        this.pageConfig.bg =
          "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg";
      }
    );
  }
  getPage(data: any): void {
    let hash = this.location.hash;
    let { title, desc, bg } = this.pageConfig;

    switch (hash) {
      case "#/":
        title = data.hometitle;
        desc = data.homelevel;
        break;
      case "#/about":
        title = data.aboutitle;
        desc = data.aboutlevel;
        bg = data.aboutImg || "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg";
        break;
      case "#/tag":
        title = data.tagstitle;
        desc = data.tagslevel;
        bg = data.tagsImg || "http://kaaden.orrzt.com/public/uploads/8c23f4a2b2baf68c6c6c020542696629.jpg";
        break;
    }
    this.pageConfig = {
      title,
      desc,
      bg
    };
  }

}
