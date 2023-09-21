import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/films', pathMatch: 'full'
},
{
  path: 'films',
  component: FilmComponent
},
{
  path: 'film/:id',
  component: FilmDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
