
/* variable */

const pi = 3.14; // const value can't be changed
let maruf = 10; // let value can be changed
var hasan = 20;  // var has global scope which is not good practice.
user = "maruf" // without let, var, const it will be global variable.
console.table({pi, maruf, hasan , user}); 




/* data types */

// # primitive 7 types
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value/ empty
// undefined => not assigned a value
// symbol => unique
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// # reference (non-primitive) 3 types
// object => {}  // data type => object
// array => [] // data type => object
// function => function(){} //data type => object function



/* memory type */

// stack(primitive) and heap(reference/non-primitive)
// stack => copy; heap => reference

// stack
let Maruf = 10;
let Hasan = Maruf; // hasan gets the copy value of maruf
Hasan = 20;
console.log(Maruf , Hasan); //10 20

// heap
let user_1 = {
    name: "maruf",
    age: 20
}
let user_2 = user_1; // user_2 gets the reference value of user_1 so if any of them changes the value, both will be changed.
user_1.age = 21;
console.log(user_1.age , user_2.age); //21 21



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

 

/* operators */

console.log("1" + 2 + 2);  // 122 => 1st one is a string so all will be count as string
console.log(1 + 2 + "2");  // 32 => 1st two are number so those will be added but because of 3rd one it's type will be string
console.log(+true); // 1
console.log(+""); // 0



/* prefix and postfix */

let i = 1;
console.log(i++); // postfix; first it will show i value (1) then it will increase to 2;
console.log(++i); // prefix; first it will increase to (3) then it will show the value;


/* conversion */

// don't use ==, use ===
console.log ("2" > 1); // true; "2" => 2 
console.log("01" == 1); // true; "01" => 1
console.log(true == 1); // true; true => 1

console.log(null == 0); // false; null did not converted to a number only happens with ==
console.log(null > 0); // false; null => 0
console.log(null >= 0); // true; null => 0

console.log(undefined == 0); // false; undefined can't be converted to a number
console.log(undefined > 0); // false;
console.log(undefined >= 0); //false;

// to check value as well as type use ===

console.log( "2" === 2); //false; "2" is a string