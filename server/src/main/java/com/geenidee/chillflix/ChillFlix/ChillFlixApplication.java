package com.geenidee.chillflix.ChillFlix;

import com.geenidee.chillflix.ChillFlix.movies.Movie;
import com.geenidee.chillflix.ChillFlix.movies.MovieRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ChillFlixApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChillFlixApplication.class, args);
	}

	@Bean
	public ApplicationRunner initData(MovieRepository repository) {
        return args -> {
            repository.save(new Movie("The Shawshank Redemption", 1994, "6hB3S9bIaco"));
            repository.save(new Movie("The Godfather", 1972, "sY1S34973zA"));
            repository.save(new Movie("The Dark Knight", 2008, "EXeTwQWrcwY"));
            repository.save(new Movie("The Godfather: Part II", 1974, "qJr92K_hKl0"));
            repository.save(new Movie("Pulp Fiction", 1994, "s7EdQ4FqbhY"));
            repository.save(new Movie("Schindler's List", 1993, "M5FpB6qDGAE"));
            repository.save(new Movie("The Lord of the Rings: The Return of the King", 2003, "r5X-hFf6Bwo"));
            repository.save(new Movie("12 Angry Men", 1957, "A7CBKT0PWFA"));
            repository.save(new Movie("The Lord of the Rings: The Fellowship of the Ring", 2001, "V75dMMIW2B4"));
            repository.save(new Movie("Forrest Gump", 1994, "uPIEn0M8su0"));
        };
	}
}
