'use strict';

//1)filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);

//2) map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

// 3)every/some

// const some = [4, 5, 7];
// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// 4)reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                     // 3       4
//                     // 4       5
//                     // 9       1
//                     // 10      3

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum }, ${current}`);
// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const goodFilms = arr.filter(item => item.rating >= 8);
    
    return goodFilms;
}
showGoodFilms(films);

function showListOfFilms(arr) {
    let movieList = [];
    arr.forEach(film => {
        movieList.push(film.name);        
    });
    const list = movieList.reduce((sum, current) => `${sum }, ${current}`);
    return list;
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;               
    });    
}

setFilmsIds(films);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    console.log(arr.every(film => ('id' in film)));
}
checkFilms(tranformedArray);
// Решения Ивана

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// showListOfFilms(films);

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// const tranformedArray = setFilmsIds(films);

// // При срабатывании every на первом фильме он натыкается на id = 0;
// // 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// // Учитывайте этот момент
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0 ? true : false)
// }

// // Еще короче, так как условие все равне вернет true или false:
// // function checkFilms(arr) {
// //     return arr.every(film => film.id || film.id === 0)
// // }

// // Максимально коротко, но еще читаемо:
// // const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

// checkFilms(tranformedArray);