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


const tinder_user=new Object()
tinder_user.id="1vbsd"
tinder_user.name="github"
console.log(tinder_user)


const regular_user={
    email:"abc@gmail.com",
    fullname:{
        firstName:"abc",
        secondName:{
            inherited:true,
            inherited1:{
                user:false
            }
        }
    }
}
// console.log(regular_user.fullname.secondName.inherited1)  //the output would be {user:false}

const obj1={1:"a", 2:"b", 3:"c"}
const obj2={4:"d", 5:"f", 6:"g"}
// const obj3=Object.assign({}, obj1, obj2)   ///or we can do as:-(note that {} can be written or may not be written)
const obj3={...obj1, ...obj2}
console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'f', '6': 'g' } is output


const user=[
    {
        id:"2",
        email:"abc@gmail.com"
    },
    {
        id:"4",
        email:"abcg@gmail.com"
    },
    {
        id:"3",
        email:"abcd@gmail.com"
    }
]

// user[1].email
console.log(Object.keys(user))  ///this gives the output in array format which means that the object is changed to array
console.log(Object.values(user)) //this gives the values of the array object 
console.log(tinder_user.hasOwnProperty("isLoggedIn"))


//objects DESTRUCTURING:-
const course={
    language:"english",
    price:100,
    courseInstructor:"github"
}
const {courseInstructor}=course
console.log(courseInstructor)
const {price: newPrice}=course
console.log(newPrice)