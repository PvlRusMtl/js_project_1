'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt('How many movies have you seen?');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('How many movies have you seen?');
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Last movie?', '').trim(),
//                   b = prompt('How could you evaluate it?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function(){
//         if (personalMovieDB.count < 10) {
//             console.log('too little');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('classic');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('kinoman');
//         } else {
//             console.log('error');
//         }
//     },
//     showMyDB: function(hidden){
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Your favorite genre number ${i}`);
//             // if (genre === "" || genre === null) {
//             //     console.log('Not correct or data abcence');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i-1] = genre;
//             // }

//             let genres = prompt(`Tape your favorites genres number with comma`).toLowerCase();
//             if (genres === "" || genres === null) {
//                 console.log('Not correct or data abcence');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(", ");
//                 personalMovieDB.genres.sort();
//             }
            
//         } 
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
    
// };

// let a = 5; debugger

// function logNumber() {
//     console.log(a); debugger
// }

// a = 6;
// logNumber(); debugger

// a = 8;
// logNumber(); debugger

function createCounter() {
    let counter = 0;
    const myFunction = function() {debugger
        counter = counter + 1;debugger
        return counter;debugger
    }
    return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger
console.log(c1, c2, c3);


let x = 5; alert( x++ );