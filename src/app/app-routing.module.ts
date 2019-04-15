import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./app-page/page-home/page-home.component"
import { AboutComponent } from "./app-about/app-about.component"

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },//配置hash
  ]
})
export class AppRoutingModule { }