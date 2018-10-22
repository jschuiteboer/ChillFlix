import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html',
    
    styleUrls: ['movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    public movies = [];

    constructor(private movieService: MovieService){}

    ngOnInit(){
        this.movies = this.movieService.getMovies();
    }
}
