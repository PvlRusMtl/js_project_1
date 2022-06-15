'use strict';


function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      console.log(result.length);

      if (result.length === summary) {
        n = i;
        break;
      }
    }

    console.log(n);
  }

amountOfPages(25);