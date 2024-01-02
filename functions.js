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