import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";

import { MovieDetailsComponent } from './movie-details.component';
import { SafePipe } from "../../pipes/SafePipe";
import { MovieService } from "../../services/movie.service";

const movieServiceMock = {
  getMovieById: (id) => Observable.create(),
};

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        MovieDetailsComponent,
        SafePipe,
      ],
      providers: [
        { provide: MovieService, useValue: movieServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
