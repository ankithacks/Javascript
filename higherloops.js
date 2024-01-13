// for of looop
const arr =[1, 3, 6]

for( const num of arr){
    console.log(num )
}

const greetings= " Hello in devops journey!!"
for(const greet of greetings) {
    // console.log(greet)
}

// Maps in javascript
const map =new Map()
map.set('IN', "India")
map.set('UAE', "United Arab Emirates")
console.log(map)

for (const key of map) {
    console.log(key)
}

for(const [key, value] of map){
    console.log(key , ":-" , value)
}

// const learn={
//     'learning1': 'git',
//     'learning2':'linux',
//     'learning3' :'networking and dbms'
// }

// for(let [key, vakue] of learn) {
//     console.log(key, ":-", vakue)
//     // TypeError: learn is not iterable and hence cannot be iterated 
// }

const newtest={
    js:'javascript',
    cpp: 'c plus plus',
    jdk: 'java'
}
// for in loop basically used for loop oteration in objects as for of loop cannot do it!!

for (const key in newtest) {
    console.log(key);
    console.log(newtest[key])
}
