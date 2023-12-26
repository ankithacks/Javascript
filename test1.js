// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// in typescript these comparison of different data types are not allowed..its a mistake but still javascript allows it!!
console.log("2" > 1)
console.log("02" > 1)
console.log("2" == 2)
console.log("2" === 2)
// in stack memory PRIMITIVE DATATYPES are used(copy of the varialbe is received here) whereas in heap memory, NON PRIMITIVE data types are used(reference is received here)
let name= "test"
let anotherName = name
anotherName="text2"
console.log(anotherName)
console.log(name)