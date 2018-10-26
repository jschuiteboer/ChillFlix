import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMovie } from '../models/movie';
import { map } from "rxjs/operators";

@Injectable()
export class MovieService {
  
  private url:string = "http://localhost:8080/movies";

  constructor(private http:HttpClient) {}

  getMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url)
      .pipe(map((e:any) => e._embedded.movies))
  }

  getMovieById(id: number): Observable<IMovie> {
    return this.http.get(this.url + "/" + id)
  }

}
