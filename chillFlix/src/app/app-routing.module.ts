import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';



const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
