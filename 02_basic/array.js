// array

const arrNum = [1, 2, 3, 4, 5];
const arrHero = ['Ironman', 'thor', 'hulk', 'captain america'];

console.log(arrNum[1]); // 2
console.log(arrHero[2]); // hulk

// Array methods

// push - add element to the end of the array
console.log(arrNum.push(6)); // [1, 2, 3, 4, 5, 6]

// pop - remove element from the end of the array
console.log(arrNum.pop()); // [1, 2, 3, 4, 5]

// unshift - add element to the beginning of the array
console.log(arrNum.unshift(0)); // [0, 1, 2, 3, 4, 5]

// shift - remove element from the beginning of the array
console.log(arrNum.shift()); // [1, 2, 3, 4, 5]

// includes - check if the array contains the element
console.log(arrNum.includes(3)); // true

// indexOf - get the index of the element
console.log(arrHero.indexOf('thor')); // 1

// join - join the elements of the array
console.log(arrHero.join('-')); // Ironman-thor-hulk-captain america

// slice vs splice

// slice - returns a new array with the selected elements
// slice(startIndex, endIndex)

console.log(arrHero.slice(1, 3)); // ['thor', 'hulk'] 
/* 
    - doesn't change the original array
    - start index is included
    - end index is not included
    - if no end index is provided, it will slice till the end of the array
    - if negative index is provided, it will slice from the end of the array
*/

// splice - removes elements from the array and returns the removed elements
// splice(start, deleteCount, add-item1, add-item2, ...)
console.log(arrHero.splice(1, 2)); // ['thor', 'hulk']
console.log(arrHero); // ['Ironman', 'captain america']
/* 
    - changes the original array
    - start index is included
    - 2nd parameter is the number of elements to remove
    - 3rd parameter can add elements at the removed index
    - if no end index is provided, it will remove all the elements from the start index
    - if negative index is provided, it will remove from the end of the array
*/
