// javascript allow us to convert from data types to another data type

let score = 33

console.log(typeof score) //number

//to convert score to string we can 

let convertscore = String(score)
console.log(typeof convertscore) //string 

//to convert convertscore from stirng to number 

let numberscore = Number(convertscore)
console.log(typeof numberscore) //number


let strnum = '33ab' //(can this be convert to num)
console.log(`strnum = ${typeof strnum}`)

let num = Number(strnum)
console.log(`num = ${typeof num}, ${num}`) // here the 33ab will be converted to NaN as number because it has charters also

/*
conversions of Boolean

1 => true; 0 => false
"" => false
"nitin" => true

*/

// ******************************************** Operations ******************************************
console.log("-------Operations topic start from here--------")


let value = 3
let negValue = -value

console.log(negValue)  //output : -3

let x = 6
let y = ++x //prefix 
let z = x++ //postfix

console.log(`x is: ${x}, y is: ${y}, z is ${z}`) // output: x is: 8, y is: 7, z is 7

let str1 = "Hello "
let str2 = "Nitin"

let str3 = str1 + str2
console.log(str3) // concatination
console.log(1+"2")   // output : '12' bcoz number + strig = string
console.log(1+2+"2") // output : '32' bcoz number + number + string = number + string = string 

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

*/