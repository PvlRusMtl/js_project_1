'use strict';



function deepCount(a) {
   return a
   .reduce((acc, val) => {
      return acc + (Array.isArray(val) ? deepCount(val) : 0);
   }, a.length);
};
deepCount([1, 5, 3]);