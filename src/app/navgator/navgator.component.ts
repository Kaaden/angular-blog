import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navgator",
  templateUrl: "./navgator.component.html",
  styleUrls: ["./navgator.component.less"]
})
export class NavgatorComponent implements OnInit {
  isDon: boolean = false;
  nav: string[] = ["HOME", "ABOUT", "TAG"];
  subscribeScoll: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  goPath(item) {
    let page = {
      HOME: "",
      ABOUT: "about",
      TAG: "tag"
    };
    this.router.navigate([page[item]]);
  }
  @HostListener("window:scroll", ["$event"])
  onScroll(e) {
    let scrollTop = document.documentElement.scrollTop;
    let bgHeight = document.getElementById("head-bg")
      ? document.getElementById("head-bg").clientHeight
      : 0;
    if (scrollTop >= bgHeight) {
      this.isDon = true;
    } else {
      this.isDon = false;
    }
  }
}
