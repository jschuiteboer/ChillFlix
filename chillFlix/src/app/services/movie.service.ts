import { Injectable } from '@angular/core';


@Injectable()
export class MovieService {
  
  constructor() {}

  getMovies(){
    return[
      {"id": 1,"title": "The Shawshank Redemption", "year": 1994},
      {"id": 2,"title": "The Godfather", "year": 1972},
      {"id": 3,"title": "The Dark Knight ", "year": 2008},
      {"id": 4,"title": "The Godfather: Part II", "year": 1974},
      {"id": 5,"title": "Pulp Fiction", "year": 1994},
      {"id": 6,"title": "Schindler's List", "year": 1993},
      {"id": 7,"title": "The Lord of the Rings: The Return of the King", "year": 2003},
      {"id": 8,"title": "The Good, the Bad and the Ugly", "year": 1966},
    ];
  }
}


