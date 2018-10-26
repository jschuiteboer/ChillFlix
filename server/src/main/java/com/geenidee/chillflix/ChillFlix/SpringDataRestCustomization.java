package com.geenidee.chillflix.ChillFlix;

import com.geenidee.chillflix.ChillFlix.movies.Movie;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class SpringDataRestCustomization extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Movie.class);

        config.getCorsRegistry()
                .addMapping("/**")
                    .allowedOrigins("http://localhost:4200");
    }
}