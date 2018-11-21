
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie';


@Component({
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html',
    styleUrls: ['movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    public movies$:Observable<IMovie[]>;

    constructor(
      private movieService: MovieService
    ){}

    ngOnInit() {
      this.movies$ = this.movieService.getMovies();
    }
}
