import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "**", loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
