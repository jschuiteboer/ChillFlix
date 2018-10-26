import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMovie } from '../models/movie';
import { map } from "rxjs/operators";

@Injectable()
export class MovieService {
  
private url: string = "/assets/data/movies.json";

  constructor(private http:HttpClient) {}

  getMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url);
  }

  getMovieById(id: number): Observable<IMovie> {
    return this.http.get(this.url)
      .pipe(map((films:Array) => films.find(e => e.id == id)))
  }

}
