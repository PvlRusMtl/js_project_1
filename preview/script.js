'use strict';

// const bigInt = 1234554863299626446446944n;

const sameBigInt =  BigInt(1234554863299626446446944);

// console.log(5n === 5);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);