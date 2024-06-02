//variable declaration

const toCheck = 12345;
let emailCheck = "nitin7817@gmail.com";
var passCheck = "Nitin123";
noVariable = 'Ghazibad';
let notDefined;
/*---------------------------------------------------------------------------
//variable update
*/
// toCheck = 2345;(can not happen so commented)
emailCheck = "Nitin123@gmail.com";
passCheck = 23125;
noVariable = 235;  //(variable can be reassigned to different data type)
//---------------------------------------------------------------------------
//variable printing

console.table([toCheck,emailCheck,passCheck,noVariable,notDefined])
//--------------------------------------------------------------------------- 
/*
// error shown
>>>> const can not be reassigned with same name and different value

-----------------------------------------------------------------------------

>>>>output VVVVVVVVVVVVVVVVVVVVVVVVVVVVV

┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 12345                │
│ 1       │ 'Nitin123@gmail.com' │
│ 2       │ 23125                │
│ 3       │ 235                  │
│ 4       │ undefined            │
└─────────┴──────────────────────┘
*/


