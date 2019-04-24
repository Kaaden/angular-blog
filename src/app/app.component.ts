import { Component, HostListener,OnInit } from '@angular/core';
import { AppService } from "./app-services";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
    this.fontSize()
  }
  ngOnInit() {
    this.updateView()
  }
  fontSize(): void {
    let deviceWidth = document.documentElement.offsetWidth;
    if (deviceWidth > 1920) {
      deviceWidth = 1920;
    }
    let fontsize = deviceWidth / 19.2;
    document.documentElement.style.fontSize = `${fontsize}px`
    console.log(document.documentElement.style.fontSize)
  }

  updateView(): void {
    const isView = window.localStorage.getItem("isView")
    if (!isView) {
      this.appService.updateView().subscribe(
        (data) => {
          if (data.isok) {
            window.localStorage.setItem("isView", "1")
          }
        },
        (error: Error) => {
          console.log(error)
        }
      )
    }
  }

  @HostListener("window:resize", ["$event"])
  resizeBy(e) {
    this.fontSize()
  }
}
