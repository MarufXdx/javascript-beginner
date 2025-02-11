const balance = 10000000;
const price = 1495.887;

console.log(balance.toString().length); // 8
console.log(balance.toLocaleString()); // 10,000,000
console.log(price.toFixed(2)); // 1495.89 => 2 decimal places
console.log(price.toPrecision(5)); // 1495.9 => will take 5 digits
console.log(price.toPrecision(4)); // 1496
console.log(price.toPrecision(3)); // 1.50e+3 => shows in scientific notation
console.log(price.toExponential(6)); // 1.495887e+3 => shows in scientific notation