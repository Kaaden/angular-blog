import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./app-page/page-home/page-home.component"
import { AboutComponent } from "./app-page/page-about/page-about.component"
import { PageDetailComponent } from "./app-page/page-detail/page-detail.component"
import { PageLoginComponent } from "./app-page/page-login/page-login.component"
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "detail", component: PageDetailComponent },
  { path: "login", component: PageLoginComponent }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },//配置hash
  ]
})
export class AppRoutingModule { }