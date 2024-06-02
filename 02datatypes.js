"use strict";  //treat all js code as new js version

 // always write clean, intended and readable code

 console.log(3+3) //correct way to write a code

 console.log(3
    +3
 )                //bad way to write a code

 /*
 console.log("Nitin") console.log("Nitin Goswami") 
 >>>>>>>>>>>>>>>>>>>bad way to write the code use console in another line or
                    use semicolon
*/

let name = "Nitin"          //data type : String
let age  =  18              //data type : number
let islogin = false         //data type : boolean
let temperature = null      //data type : null
let noname                  //data type : undefined

//------------------------------------------------------------------------------------------------
//Printing tyopeof the variable

console.table([typeof(name),typeof(age),typeof(islogin),typeof(temperature),typeof(noname)])

// Output of the data type of variable
/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │  
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'object'    │  (typeof null is object)
│ 4       │ 'undefined' │
└─────────┴─────────────┘




use mdn web to get refrence of vriable and data type
*/