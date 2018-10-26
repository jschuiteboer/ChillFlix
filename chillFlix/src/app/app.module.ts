import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MovieService } from './services/movie.service';
import { SafePipe } from "./pipes/SafePipe";

@NgModule({
  declarations: [AppComponent, routingComponents, SafePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
