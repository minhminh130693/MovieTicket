import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMoviePageComponent } from './detail-movie-page.component';

const routes: Routes = [
  { path: "", component: DetailMoviePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMoviePageRoutingModule { }
