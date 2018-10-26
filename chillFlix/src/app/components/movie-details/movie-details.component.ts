import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer} from '@angular/platform-browser'

import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit, OnDestroy {
  
  private movieId: number;
  private subscription : Subscription;

  public movies = [];
  public errorMsg:string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private movieService: MovieService) { }



    ngOnInit() {
      
      this.movieId = +this.route.snapshot.params['id'];

      this.subscription = this.movieService.getMovies().subscribe( 
        (data: Array<IMovie>) =>{
            this.movies = data;
            console.log('Observer got new/next films: ' + data);
        },
        err =>{
            this.errorMsg= err;
            console.error('Getting films failed with error: ' + err);
        }
      );
    }

    ngOnDestroy(){
      this.subscription.unsubscribe(); 
    }

    getEnbedUrl(){
      for (let movie of this.movies){
        if(this.movieId== movie.id){
          return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+movie.url)
        }
      } 
    }
    
}
