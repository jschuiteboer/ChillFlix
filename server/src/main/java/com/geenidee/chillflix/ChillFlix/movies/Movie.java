package com.geenidee.chillflix.ChillFlix.movies;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private int year;

    private String url;

    private String thumbnail;
}
