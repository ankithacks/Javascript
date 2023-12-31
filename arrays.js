const myArr=[0,3,5,4,2]
// arrays follw SHALLOW copy means the copy whose property share same reference point that means any change in array will affect the original array whereas in DEEP copy objects do not share the same reference point
const newArr=["name","age", "classroom"]
const newArr1=new Array(1,5,3,6,9)
console.log(myArr[3]) 

// ARRAY METHODS
myArr.push(6)
console.log(myArr) 
myArr.pop()
console.log(myArr)
myArr.unshift(0) //used to add elements in the beginning but this is not a good option though whereas shift will remove the element from front
console.log(myArr) 
console.log(myArr.includes(4))
console.log(myArr.indexOf(7))  ///if not present then it shows -1
const newTest=myArr.join()
console.log(typeof newTest) //output is of STring

// slica vs splice 
console.log("a", myArr)
const myar1=myArr.slice(1, 3)   //output is 3-1=2 elements including index 1 and excluding 3
console.log(myar1)
console.log("B" , myArr)

const myar2=myArr.splice(1,3)    //this excludes the sliced elements and here original array gets affected
console.log("B" , myArr) 


const name=["abc", "bca", "computers", "science", "engineering"]
const name1=["ab", "bc", "computer", "science 1", "engineering 1"]
// name.push(name1)
// console.log(name)  
// the output would be :- [ 'abc','bca','computers','science','engineering',[ 'ab', 'bc', 'computer', 'science 1', 'engineering 1' ]  .....this is not a good way of array merging
// const add= name.concat(name1)
// console.log(add)  //the output would be ['abc','bca','computers','science','engineering','ab','bc','computer','science 1','engineering 1']  which is a good way to solve

const all_new=[...name1, ...name] ///this is spread operator
// console.log(all_new)   ///this gives the same output as concat and preferred in industry

const nested_array=[1,4,3,[5,7,5],45,768,[4,[5,7,6]]]
const useable_array=nested_array.flat(Infinity)
// console.log(useable_array)

console.log(Array.isArray("github"))  //returns FALSE
console.log(Array.from("github"))    //converts the input to array [ 'g', 'i', 't', 'h', 'u', 'b' ]