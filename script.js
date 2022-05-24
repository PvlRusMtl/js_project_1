"use strict";

const number0fFilms = +prompt("How many movies did you see?", "1");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the movies seen?", "");
const b = prompt("How can you evaluate it?", "");
const c = prompt("One of the movies seen?", "");
const d = prompt("How can you evaluate it?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);