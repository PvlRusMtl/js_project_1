"use strict";

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
        
    }
}

let res = '';
const length = 7;

for(let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        res += '*';
    }
    res += '\n';
}

console.log(res);

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
    
let i = 2;
while (i < 16) {
    if (i%2 !== 0) {
        console.log(i);
    }    
    i++;
}