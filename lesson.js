"use strict";

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
        
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`); 
        for (let k = 0; k < 3; k++) {
            if (k == 2) continue first;
            console.log(`Third level: ${k}`);       
        }
    }      
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
    
for (let i = 2; i < 11; i++) {
    if (i%2 !== 0) {
        continue;
    }
    console.log(i);
}
    
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = data.length - 1; i >= 0; i--) {
    
    for (let j = 0; j <= i; j++) {
        result[j] = data[i];
    }
    
}
console.log(result)

//
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);
//
const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i] === 'string')) {
        data[i] = `${data[i]} - done`;
    console.log(data);
    }
}


