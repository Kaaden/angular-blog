import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navgator',
  templateUrl: './navgator.component.html',
  styleUrls: ['./navgator.component.less'],
  // host: {
  //   '(window:scroll)': "onScroll($event)"
  // }
})
export class NavgatorComponent implements OnInit {
  isDon: boolean = false
  nav: string[] = ["HOME", "ABOUT", "TAG"]
  subscribeScoll: any
  constructor() { }

  ngOnInit() {
  }
  @HostListener("window:scroll", ["$event"])
  onScroll(e) {
    let scrollTop = document.documentElement.scrollTop;
    let bgHeight = document.getElementById("home-bg").clientHeight
    if (scrollTop > bgHeight) {
      this.isDon = true
    } else {
      this.isDon = false
    }
  }
}
