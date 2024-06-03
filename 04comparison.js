//comparison operator

console.log( 2 > 1 );    
console.log( 3 < 2 );
console.log( 6 <= 9);
console.log( 3 == 1);
console.log( 2 != 1);

// tricky comparison operator  
console.log('-----tricky comparison starts here-----')

console.log("2" > 1)      // output : true bcoz conditional operator convert strings into number
console.log(null > 0)     // output : false bcoz null is converted to 0 by conditional operator and 0>0 is false
console.log(null == 0)    // output : false bcoz as equlity comparision checks the datatype and treat null as undefined which is false
console.log(null >= 0)    // output : true bcoz here >= converts null to number 0 and 0=>0 gives true
console.log( "2" === 2)   // output : false as === strictly check the datatype 

