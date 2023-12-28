const score=400
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //we have to define a value here where 2 means 100.00
const othernumber=23.45346
console.log(othernumber.toPrecision(3)); //o/p is 23.4
var testNumber=123.892
console.log(testNumber.toPrecision(3)); //o/p is 124
var testNumber=1123.892
console.log(testNumber.toPrecision(3)); //o/p is 1.12e+3
const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN')); //normally it would give standard representation in American representation, but if we write 'en-IN' then indian format that is 10,00,000

// ******************************** MATHS LIBRARY ****************************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,6,3,7,5,8))
console.log(Math.random()); //always comes in between 0 and 1 only
console.log(Math.random()*10); //multiply 0 and 1 with 10 that is between 0 and 10
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20 
console.log(Math.floor(Math.random() * (max-min + 1)) + min)
