'use strict';


// let numberOfFilms;
// function start() {
//     numberOfFilms = prompt('How many movies have you seen?');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('How many movies have you seen?');
//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Last movie?', '').trim(),
//               b = prompt('How could you evaluate it?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('too little');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('classic');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('kinoman');
//     } else {
//         console.log('error');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}?`, '');
//         } 
// }

// // writeYourGenres();

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    say: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// // john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// // console.log(john.armor);
john.say();