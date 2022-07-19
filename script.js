'use strict';

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const multiply20 = x => x * 20;
const divide100 = x => x / 100;

// function composition
var output_final = compose(divide100, multiply20)(200);
console.log(output_final);

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

function solution(str){
   //str.length % 2 ? 
   str = ((str  + '_').split('').join('').match(/.{2}/g));
   console.log(str);
   // : console.log(str.split('').sort().join('').match(/.{1,2}/g));
}
function solution(s){
  return ((s+"_").match(/.{2}/g)) || []
}

solution('acb');
// ['ab', 'c_']
solution('abcdef');
// ['ab', 'cd', 'ef']

function solution(str){
    var arr = str.split('');
    var res = []
 
    for(let i = 0; i<arr.length; i+=2){
      (arr[i+1]) ? res.push(arr[i]+arr[i+1]) : res.push(arr[i]+'_')
    }
 
   return (res);
 }
solution('HKKLMUVYabegjnnopqtv');
solution('MqKbajpVnvKgYnUoHeLt');