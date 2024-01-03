function sayMyName(){
    console.log("printing the name!!")
}

sayMyName ///just this means reference
sayMyName() //this means function calling

function addNumbers(number1, number2){
    const number3= number1+number2
    return number3
}

console.log(addNumbers(3,5))
const result=addNumbers(4,6)
console.log("result is:", result)


function loginUser(username){
    if(username === undefined){
        console.log("please enter some values before executing!!")
        return
    }
    return console.log(`${username} just logged in`)
}

loginUser("github")
loginUser()    //undefined value is sent so that it dosent gets executed


function calculatePrice(... num1){
    return num1
}
console.log(calculatePrice(3,5,6))

const obj={
    username:"github",
    price: 4550
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`)
}

handleObject(obj)


const array=[466,568,789,208]
function returnSecondArray(getArray){
    return console.log(getArray[2])
}
returnSecondArray(array)


function one(){
    const username="github"

    function two(){
        const qwbsite="github@gmail.com"
        console.log(username)
    }
    // console.log(qwbsite)  this is invalid as parente cannot inherit from child
    two()
}
one()


// ++++++++++++++++++++++interesting area ++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}

// console.log(addTwo(6))  ///this will give an error ....this is an example of MINI HOISTING
const addTwo=function (num){
    return num+2
}


// ++++++++++++++++ ARROW functions +++++++++

const user={
    username:"githubslash@gmail.com",
    payment: true,
    loggedIn: true,
    welcomeMessage: function (){
        console.log(`${this.username} welcome to our website`)
    }
}

user.welcomeMessage()

// function test2(){
   // console.log(this)   //this wont work inside function....this can be accessed only by objects
// }
// test2()

// const chai=() =>{
//     let username="testGit"
//     // console.log(this.username)  //here also this keyword cannot be used inside the function as well as if we do console.log(this)...this also wont work and give the output of {}
// }
// chai()


const test2= (num1, num2) =>{
    return num1+num2
}

console.log(test2(4,7))

const add3= (num1, num2) =>({
    userAdd:"yes added"   //when we write the objectswe have to use () in declaring the arrow function
})