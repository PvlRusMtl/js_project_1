'use strict';

const arr = ['Alix', 'Bolik', 'Juma', 'Alix'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);

// set.add('Iban')
//     .add('Bolik');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear(value);
// set.size;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

