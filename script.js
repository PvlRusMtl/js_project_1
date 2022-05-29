// 'use strict';

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr){
//     return curr * amount;
    
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// promotion(convert(500, usdCurr));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// function getMathResult(base, repeat) {
//     if (typeof(repeat) != 'number' || repeat <= 0) {
//         return base;
//     } else {
//         let str = '';
//         for (let i = 1; i <= repeat; i++){
//             if (i === repeat) {
//                 str += `${base * i}`;                
//             } else {
//                 str += `${base * i}---`;                
//             }        
//         }
//         return str;
//     }
// }
// getMathResult(3, -3);
// //
let numberOfFilms;
function start() {
    numberOfFilms = prompt('How many movies have you seen?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many movies have you seen?');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last movie?', ''),
              b = prompt('How could you evaluate it?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('too little');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('kinoman');
    } else {
        console.log('error');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}?`, '');
        } 
}

writeYourGenres();
