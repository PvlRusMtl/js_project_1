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

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b){
    return a-b;
}

// arr[99] = 0;
// console.log(arr.length);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
// console.log(Object.keys(options).length);
// let counter = 0;
// for (let key in options ) {
//     if (typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
