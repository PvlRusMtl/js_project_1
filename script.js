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

//To string
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean

// 0, '', num, undefined, NaN;

//1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}

//2)

console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!'4'));