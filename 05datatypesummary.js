//Some concepts of datatype and all the lectures covered from 01 to 04

/*

Q1. What are type of Primitve datatype in javascript?

*/

// 7 types of primitve data type in javascript
String
Number
BigInt
Boolean
null            //typeof = object
undefined       //typeof = undefined
Symbol          //typeof = Function
let id = Symbol(123)
let id2 = Symbol(123)

console.log(id==id2) //false
console.log(id,id2)  //Symbol(123) Symbol(123) 

console.log(typeof Symbol) 

/*

Q2. What are type of Non-Primitve datatype in javascript?

*/

Array
Object
Function

const arr = ['this','is','array']
const obj = {
    this: 'is',
      an: 'object',
}
const func = function(num=1){
    console.log('This is a function'+ num)
}

