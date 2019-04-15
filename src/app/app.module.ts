import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";

import { AppComponent } from "./app.component";
// http模块
import { HttpClientModule } from "@angular/common/http";
// Router
import { AppRoutingModule } from "./app-routing.module";
//component
import { HeadBgComponent } from "./app-component/component-head/component-head.component";
import { ListComponent } from "./app-component/component-list/component-list.component";
import { NavgatorComponent } from "./app-component/component-nav/component-nav.component";
import { UserComponent } from "./app-component/component-user/component-user.component";
//Page
import { HomeComponent } from "./app-page/page-home/page-home.component";
import { AboutComponent } from "./app-page/page-about/page-about.component";
//配置antd
import { NgZorroAntdModule } from "ng-zorro-antd";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    HeadBgComponent,
    ListComponent,
    UserComponent,
    NavgatorComponent,


    HomeComponent,
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
