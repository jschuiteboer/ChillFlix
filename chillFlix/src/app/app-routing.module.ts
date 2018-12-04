import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const appRoutes: Routes = [
  { path: 'movie-list/:id', component: MovieDetailsComponent },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  { path: 'movie-list', component: MovieListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  exports: [
    RouterModule,
  ]
})
  
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  MovieListComponent,
  MovieDetailsComponent
];
