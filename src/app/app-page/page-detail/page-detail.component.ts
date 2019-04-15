import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../../app-services"
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.less']
})
export class PageDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AppService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      let id = query.id || 0
      if (id) {
        this.getDetail(id)
      }
    });
  }
  getDetail(id: number): void {
    this.service.getDetail(id).subscribe(
      (data => {
        console.log(data)
      }),
      (error: Error) => {

      }
    )
  }
}
