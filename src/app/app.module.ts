import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
// http模块
import { HttpClientModule } from "@angular/common/http";
// 路由
import { AppRoutingModule } from "./app-routing.module";

//组件
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { NavgatorComponent } from "./navgator/navgator.component";
import { ListComponent } from "./list/list.component";

//配置antd
import { NgZorroAntdModule } from "ng-zorro-antd";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeadBgComponent } from "./head-bg/head-bg.component";
import { SynopsisComponent } from './synopsis/synopsis.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    NavgatorComponent,
    ListComponent,
    HeadBgComponent,
    SynopsisComponent
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
export class AppModule {}
