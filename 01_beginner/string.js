const name = "maruf";
const age = 25;

console.log(name + " is " + age + " years old."); // don't use this
console.log(`${name} is ${age} years old.`); // modern way


// "new" string writing method

const gameName = new String('marufxdx');
console.log(gameName);
console.table([
    gameName.length, // 8
    gameName[0], // m 
    gameName.charAt(0), // m 
    gameName.at(-2), //d => at can take negative value to access the end
    gameName.concat(' is game the name of ', name), // marufxdx is game name of maruf => used to join two or more strings together. other methods are better for readability.
    gameName.startsWith('maruf'), // true => check if the string starts with the specified value
    gameName.endsWith('xdx'), // true => check if the string ends with the specified value. those also has a 2nd parameter [endswith(searchString, character_position)]
    gameName.includes('xd'), // true => check if the string contains the string
    gameName.indexOf('xd'), // 5 => find the first occurrence of the specified value [returns -1 if not found]
    gameName.lastIndexOf('xd'), // 5 => find the last occurrence.
    gameName.search(/xd/), // 5 => search for a singular match. [can use regex]
    gameName.match(/xd/), // ['xd'] => gives an array of the all the matches.
    gameName.replace('xdx', 'XDX'), // marufXDX => replace the first occurrence of the specified value
    gameName.replaceAll('x', 'X'), // marufXdX => replace all the occurrences.
    gameName.charCodeAt(1), // 97 => UTF-16 code [0-65535]
    gameName.codePointAt(1), // 97 => Unicode [0-65535 & beyond]
    gameName.padStart(10, '0'), // 00marufxdx => add padding at the start
    gameName.padEnd(10, '0'), // marufxdx00 => add padding at the end
    gameName.repeat(2), // marufxdxmarufxdx => repeat the string [decimals are rounded down 2.9 => 2]
    gameName.slice(5, 8), // xdx => slice the string [start, end] can take negative values.
    gameName.substring(8, 5), // xdx => slice the string [start, end] can't take negative values [if start > end, it will swap them]
    gameName.trim(), // marufxdx => remove whitespace from both sides
    // for lowerCase - toLowerCase() / toLocaleLowerCase()
    // for upperCase - toUpperCase() / toLocaleUpperCase()
]   
); 

//split
const game = "the legend of maruf land"
console.log(game.split(' ')); // ['the', 'legend', 'of', 'maruf', 'land'] => split the string into an array of substrings
console.log(game.split(' ', 3)); // ['the', 'legend', 'of'] => split the string into an array of substrings with a limit
console.log(game.split('')); // ['t', 'h', 'e', ' ', 'l', 'e', 'g', 'e', 'n', 'd', ' ', 'o', 'f', ' ', 'm', 'a', 'r', 'u', 'f', ' ', 'l', 'a', 'n', 'd'] => split the string into an array of substrings with each character