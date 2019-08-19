import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, children: [
    { path: "", loadChildren: "./home-page/home-page.module#HomePageModule" },
    { path: "detail-movie-page/:id", loadChildren: "./detail-movie-page/detail-movie-page.module#DetailMoviePageModule" },
    { path: "ticket-movie-page/:id", loadChildren: "./ticket-movie-page/ticket-movie-page.module#TicketMoviePageModule" }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
