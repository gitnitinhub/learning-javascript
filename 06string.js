const name = "Nitin";
const repocount = 10;

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

//Methods in strings

let string = "mynameisnitin"

console.log(string[1])                  //output: y
console.log(string.toUpperCase())       //output: MYNAMEISNITIN
console.log(string.charAt(2))           //output : n
console.log(string.indexOf('n'))        //output: 2

//substring and slice method of string

//sbustirng
string = "mynameisnitin"
const newstring = string.substring(0,4) //output: myna [takes only positive value. 0,4 are indexs to create substring form 0 to 4 where 4 will not be included] 
console.log(newstring)


//slice
const slicepstring = string.slice(0,4)  //output: myna [ 0,4 are indexs to create slice form 0 to 4 where 4 will not be included]
console.log(slicepstring)                
const slicenstring = string.slice(1,-4) //output: ynameisn [1,-4 here -4 is counting from last of string and 1 is counting from start of string]
console.log(slicenstring)

//trim
let nstring = "              stringwithspaceatbothend               "
console.log(nstring.trim())             //output: stringwithspaceatbothend [trim remove spaces from both the end]
console.log(nstring.trimStart())        //output: stringwithspaceatbothend               [trim start remove space from start only]
console.log(nstring.trimEnd())          //output:               stringwithspaceatbothend [trim end remove space from end only]

//replace
const url = "https://nitingoswami.com/nitin%20goswami"
console.log(url.replace("%20",'-'))