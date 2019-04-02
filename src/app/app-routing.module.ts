import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"
const routes: Routes = [
  { path: "",component: HomeComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }