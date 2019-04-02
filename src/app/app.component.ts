import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor() {
    this.fontSize()
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
}
