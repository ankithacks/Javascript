const repoCount= 50

// console.log(name + repoCount + "value")  //this is not a good way to resolve the concatenation of strings

console.log(`Hey my repo count is ${repoCount}`) //this is string interpolation
const newName= new String("   ankit%20Repo")  //this is another way to initilize name
console.log(newName.endsWith('o'))
console.log(newName[0])
console.log(newName.__proto__)
console.log(newName.charAt(3))
console.log(newName.indexOf('n'))

console.log(newName.substring(0, 4))  //...4 is not included here and it does not uses negative values
console.log(newName.slice(0, 4))
console.log(newName.trim())
console.log(newName.replace('%20', '-'))