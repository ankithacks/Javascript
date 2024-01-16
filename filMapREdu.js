const coding=["js", "rust", "c++", "python", "java"]


const values=coding.forEach((item) => {
    console.log(item);
    return item;
});
console.log(values);; //this returns as undefined 

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.filter((num)=> num > 5)
console.log(newNums)
const newNums1= myNums.filter((num)=>{
    return  num > 5
})
console.log(newNums1)

const newNums2=[]
myNums.forEach((num)=>{
    if(num > 4){
        newNums2.push(num)
    }
})


const books=[
    {
        title:"book 1",
        genre: "english",
        publish: "12th"
    },
    {
        title:"book 2",
        genre: "math",
        publish: "13th"
    },
    {
        title:"book 3",
        genre: "science",
        publish: "14th"
    }
]


let userBooks=books.filter((bk)=>bk.genre === "science")
userBooks=books.filter((bk)=>{return bk.publish>="12th"})
console.log(userBooks)


const numbers=[1,2,3,4,5,6,7,8]
console.log(numbers.map((num)=>{
    return num+10
}))

// chaining the methods of filter and map one after the other
console.log(numbers.map((num)=> num*10).map((num) => num+1))

// ++++++++++++++++REDUCE FUNCTIONS ++++++++++++++++++
const test=[1,2,3]
const total=test.reduce(function (accumulator, currentValue) {
    return accumulator+currentValue
}, 0)
// the 0 here defines the start of the accumulator 
console.log(total)

// same above logic but with arrow functions
const myTotalNums=test.reduce( (acc, curval)=> {
    return acc+curval
} , 0)