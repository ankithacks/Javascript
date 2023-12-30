// // console.log(2 > 1)
// // console.log(2 == 1)
// // console.log(2 < 1)
// // console.log(2 <= 1)
// // console.log(2 != 1)

// // in typescript these comparison of different data types are not allowed..its a mistake but still javascript allows it!!
// console.log("2" > 1)
// console.log("02" > 1)
// console.log("2" == 2)
// console.log("2" === 2)
// // in stack memory PRIMITIVE DATATYPES are used(copy of the varialbe is received here) whereas in heap memory, NON PRIMITIVE data types are used(reference is received here)
// let name= "test"
// let anotherName = name
// anotherName="text2"
// console.log(anotherName)
// console.log(name)

// DATES AND TIME IN JAVASCRIPT
let myDate=new Date()
console.log(myDate)
console.log(myDate.toUTCString())
console.log(myDate.toDateString())
console.log(typeof myDate)

var newDate=new Date(2343, 1, 12)   //month in Js starts with 0 that is in place of 1 it can 0 also
console.log(newDate.toDateString())
var newDate=new Date(2023, 0 , 12, 4, 5)   //the more denotes the time in hour and minutes
console.log(newDate.toLocaleString())
var newDate=new Date("2023-01-12") //this is third type of declaration
console.log(newDate)

let myTimeStamp=Date.now()
console.log(myTimeStamp)  ///prints in milliseconds
console.log(newDate.getTime())  ///this also prints in milliseconds
console.log(Math.floor(Date.now()/1000))  //this prints in seconds

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))