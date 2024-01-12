// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best")
    }
    console.log(element);
}

let myArray=["git", "gitlab", "linux", "devops"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


// break and continue
for (let index = 0; index < 20; index++) {
    console.log(`value of i is ${index}`)
    if(index==5){
        break
        // if continue was detected then it would stop once to say that continue is detected (if we wrote (console.log("detected 5")) and then print the retst of it till 20 whereas in break it wont execute the lines after the break statement )
    }    
}


// +++++++++++++ while and do-while loops ++++++++++++

let val = 4;
while(val <=5){
    console.log(`value is true for ${val}`)
    val++;
}

let score=1;
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);