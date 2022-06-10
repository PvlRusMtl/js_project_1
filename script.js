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

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)), +average.slice(0, -1));
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[0] = {name: 'Mike', age: 32};
    console.log(copy.waitors);
    return copy;
}

transferWaitors(restorantData);
console.log(restorantData.waitors);
