/* memory type */

// stack(primitive) and heap(reference/non-primitive)
// stack => copy; heap => reference

// stack
let maruf = 10;
let hasan = maruf; // hasan gets the copy value of maruf
hasan = 20;
console.log(maruf , hasan); //10 20

// heap
let user_1 = {
    name: "maruf",
    age: 20
}
let user_2 = user_1; // user_2 gets the reference value of user_1 so if any of them changes the value, both will be changed.
user_1.age = 21;
console.log(user_1.age , user_2.age); //21 21

