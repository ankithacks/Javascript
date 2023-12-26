"use strict";   //treat all the Js code as newer version 

// note that in place of alert we use console.log to print in the terminals
console.log("helo there");

// the datatypes present in Javascript are:- number of range 2 to the power 53, bigint, string, boolean, null , undefined, symbol(uniqueness in react, figma), object

let score="33abc"
console.log(typeof score);
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
let isLogged=1
let booleanLoggedIn=Boolean(isLogged)
console.log(typeof booleanLoggedIn);

// lecture 7 starts:-
let val=3
let negvalue=-val
console.log(negvalue);
console.log(2**5);
let str1="good"
let str2=" morning"
console.log(str1+str2)
// prblems that may arise:-
console.log("1"+ 3)
console.log("1"+ 3 + 4)
console.log(1+ 3 + "5")