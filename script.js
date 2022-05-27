"use strict";

const numOfFilms = +prompt('How many movies have you seen?');

const personalMovieDb = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Last of watched movies?", ''),
          b = prompt('How could you evaluate it?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
if (personalMovieDb.count < 10) {
    console.log("Too little movies");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("Classic");
} else if (personalMovieDb.count >= 30) {
    console.log("Kinoman");
} else {
    console.log("Error");
}
console.log(personalMovieDb);