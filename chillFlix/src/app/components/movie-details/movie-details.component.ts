import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit, OnDestroy {

  private movieUrl: String;
  private subscription : Subscription;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

    ngOnInit() {
      let movieId:number = +this.route.snapshot.params['id'];

      this.subscription = this.movieService.getMovieById(movieId)
        .subscribe(
      (data: IMovie) => {
              if(data) {
                this.movieUrl = 'https://www.youtube.com/embed/' + data.url;
              }
            },
      err => console.error('getMovieById failed', err)
        );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    
}
