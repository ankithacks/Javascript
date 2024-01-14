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
