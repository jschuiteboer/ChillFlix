import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

const movieServiceMock = {};

describe('FilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: MovieService, useValue: movieServiceMock }
    ]
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
