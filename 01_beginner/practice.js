
/* variable */

const pi = 3.14; // const value can't be changed
let maruf = 10; // let value can be changed
var hasan = 20;  // var has global scope which is not good practice.
user = "maruf" // without let, var, const it will be global variable.
console.table({pi, maruf, hasan , user}); 




/* data types */

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// object
// array
console.log(typeof undefined); // undefined
console.log(typeof null); // object





/* conversion */

// string to number

let score = "10";
console.log(typeof Number(score)); // string to number
let score_1 = "10a";
console.log(Number(score_1)); // NaN => Not a Number but type is sill number

// "10" => 10
// "10a" => NaN
//  true => 1; false => 0
//  null => 0


//boolean to number

let isTrue = 0;
console.log(Boolean(isTrue));

// 0 => false; 1 => true
// "" => false; "Maruf" => true
// undefined => false; null => false

