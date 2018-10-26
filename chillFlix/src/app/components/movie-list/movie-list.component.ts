
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie';


@Component({
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html',
    styleUrls: ['movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

    public movies = [];
    public errorMsg:string;
    private subscription: Subscription;
    constructor(private movieService: MovieService){}

    ngOnInit() {
       this.subscription = this.movieService.getMovies().subscribe( 
            (data: Array<IMovie>) =>{
                this.movies = data;
                console.log('Observer got new/next films: ' + data);
            },
            err =>{
                this.errorMsg= err;
                console.error('Getting films failed with error:', err);
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
