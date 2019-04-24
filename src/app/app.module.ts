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
import { commitComponent } from "./app-component/component-commit/component-commit.component";
//Page
import { HomeComponent } from "./app-page/page-home/page-home.component";
import { AboutComponent } from "./app-page/page-about/page-about.component";
import { PageDetailComponent } from './app-page/page-detail/page-detail.component';
import { PageLoginComponent } from './app-page/page-login/page-login.component';

//配置antd
import { NgZorroAntdModule } from "ng-zorro-antd";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './app-component/editor/editor.component';
import { ComponentFooterComponent } from './app-component/component-footer/component-footer.component'
@NgModule({
  declarations: [
    HeadBgComponent,
    ListComponent,
    UserComponent,
    NavgatorComponent,
    commitComponent,

    HomeComponent,
    AppComponent,
    AboutComponent,
    PageDetailComponent,
    PageLoginComponent,
    EditorComponent,
    ComponentFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
