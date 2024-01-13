// for each looops
const coding=['js', 'py', 'cpp', 'java']

// callback function dose not have any names assigned to it!!
coding.forEach( function (item){
    console.log(item)
} )

// arrow functions
coding.forEach((item)=>{
    console.log(item)
})

function printMe(items){
    console.log(items)
}
coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
})