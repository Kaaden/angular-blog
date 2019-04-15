import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
// http模块
import { HttpClientModule } from "@angular/common/http";
// Router
import { AppRoutingModule } from "./app-routing.module";
//component
import { HeadBgComponent } from "./app-component/component-head/component-head.component";
import { ListComponent } from "./app-component/component-list/component-list.component";
import { NavgatorComponent } from "./app-component/component-nav/component-nav.component";
import { UserComponent } from "./app-component/component-user/component-user.component";
//Page test
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./app-about/app-about.component";
import { AppComponent } from "./app.component";
//配置antd e
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
