import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMovie } from './../models/movie';


@Injectable()
export class MovieService {
  
private url: string = "/assets/data/movies.json";

  constructor( private http:HttpClient) {}

  getMovies() : Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url);
  }

}
