"use strict";

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("I'm syt");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 0;
// const cola = 2;
// console.log(hamburger ===3 && fries && cola);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && 'fsfndkkd');


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("all syt");
// } else {
//     console.log("we leave");
// }

// console.log((hamburger && fries));

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && (cola ===2 || fries === 3) && nuggets) {
    console.log("all happy");
} else {
    console.log("we leave");
}
console.log((hamburger || cola || fries));

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);

console.log(!0);