import { Component, OnInit } from '@angular/core';
import { AppService } from "../app-services"
import { Config } from "../app-main"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  // BgImg: string
  // HomeConfig: Config = {
  //   title: "",
  //   desc: "",
  // }
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
 
 

}
