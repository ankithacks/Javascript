// Object.create()    // singleton declaration
const mySym=Symbol("key1")

//Object literal key-value pair
const js_user={
    name:"github",
    [mySym]: "key string",
    age: 18,
    location: "bombay",
    isLoggedIn: false,
    email: "git@github.gmail.com",
    lastLoginDays:[
        "Monday",
        "Tuesday"
    ],
    "nick-name":"test"
}

console.log(js_user.email)
console.log(js_user["email"])
console.log(js_user[mySym])


// changing in objects
js_user.age= 34
console.log(js_user)
// Object.freeze(js_user)  //this means that when this line is executes then no changes can be added to the object further

js_user.greeting= function(){
    console.log("hello function greet in JAVASCRIPT")
}

console.log(js_user.greeting()) //o/p is hello function greet in JAVASCRIPT  undefined
// console.log(js_user.greeting)  //o/p is [Function (anonymous)]


js_user.greeting1= function(){
    console.log(`hello JAVASCRIPT GITHUB VIEWER, ${this.name}`)
}

console.log(js_user.greeting1())