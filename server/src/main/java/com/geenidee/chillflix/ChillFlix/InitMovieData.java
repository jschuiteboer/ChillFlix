package com.geenidee.chillflix.ChillFlix;

import com.geenidee.chillflix.ChillFlix.movies.Movie;
import com.geenidee.chillflix.ChillFlix.movies.MovieRepository;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.PlaylistItem;
import com.google.api.services.youtube.model.PlaylistItemListResponse;
import com.google.api.services.youtube.model.PlaylistItemSnippet;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.time.ZonedDateTime;

@Configuration
@PropertySource("classpath:secrets.properties")
public class InitMovieData {
    public static final String PLAYLIST_ID = "PLJa9UKL06bhzIPhZRdnmvXXNbGsUgnCDk";

    @Value("${app.youtube.key}")
    private String apiKey;

    @Bean
    public YouTube youtube() {
        NetHttpTransport httpTransport = new NetHttpTransport();

        JsonFactory jsonFactory = new JacksonFactory();

        return new YouTube.Builder(httpTransport, jsonFactory, request -> {})
                .setApplicationName("youtube-cmdline-test")
                .build();
    }

    @Bean
    public ApplicationRunner initData(YouTube youtube, MovieRepository repository) {
        return args -> {
            PlaylistItemListResponse response = youtube.playlistItems()
                    .list("snippet")
                    .setPlaylistId(PLAYLIST_ID)
                    .setKey(apiKey)
                    .execute();

            for(PlaylistItem item : response.getItems()) {
                PlaylistItemSnippet snippet = item.getSnippet();

                try {

                    Movie movie = new Movie();

                    movie.setTitle(snippet.getTitle());

                    ZonedDateTime publishDate = ZonedDateTime.parse(snippet.getPublishedAt().toStringRfc3339());
                    movie.setYear(publishDate.getYear());

                    movie.setUrl("https://www.youtube.com/embed/" + snippet.getResourceId().getVideoId());

                    movie.setThumbnail(snippet.getThumbnails().getMaxres().getUrl());

                    repository.save(movie);
                } catch(Exception ignored) {
                }
            }
        };
    }
}
