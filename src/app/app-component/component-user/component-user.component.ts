import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app-services";
@Component({
  selector: "app-component-user",
  templateUrl: "./component-user.component.html",
  styleUrls: ["./component-user.component.less"]
})
export class UserComponent implements OnInit {
  list: string[] = [];
  User: any = "";
  loading: boolean = true;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTags();
    this.getUser();
  }
  getTags(): void {
    this.appService.getTags().subscribe(
      data => {
        if (data.isok) {
          this.list = data.data;
        }
      },
      (error: Error) => {
        this.list = [];
      }
    );
  }
  getUser(): void {

    this.appService.getUser().subscribe(
      data => {
        if (data.isok) {
          this.User = data.data;

        }
        this.loading = false
      },
      (error: Error) => {
        this.User = "";
        this.loading = false
      }
    );
  }
}