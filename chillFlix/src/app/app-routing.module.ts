import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const approutes: Routes = [
  { path: 'movie-list/:id', component: MovieDetailsComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


  @NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [HomeComponent,MovieListComponent,MovieDetailsComponent]
