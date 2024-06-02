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