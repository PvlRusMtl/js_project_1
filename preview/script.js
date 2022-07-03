'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    var sum = data.reduce((acc, fund) => fund.amount > 0 ? acc + fund.amount : acc, 0);
    return sum;
   };

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    return data.some(num => num.amount < 0 ) ?
        data.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0) :
        getPositiveIncomeAmount(data);
    
};

getTotalIncomeAmount(funds);

var initialValue = 0;
var sum = [{x: -4}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue);
console.log(sum);