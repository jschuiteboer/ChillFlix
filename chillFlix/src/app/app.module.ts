import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';


@NgModule({
  declarations: [AppComponent,HomeComponent, MovieListComponent],
  imports: [BrowserModule,  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
