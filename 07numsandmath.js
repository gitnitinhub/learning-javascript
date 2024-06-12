//random

console.log(Math.random())                      //gives value between 0 and 1
console.log(Math.random()*1000000)              //we can  increase value to get a six digit number we can multipy by 1000000 
console.log(Math.floor((Math.random()*1000000)))//we can add floor to take the specific value and remove floating deccimals

//using random to take output between a range 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*10)+(max - min + 1)) //to get output in specific range 