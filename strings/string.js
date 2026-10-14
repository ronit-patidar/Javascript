// A string is a sequence of characters used to store text.
let name = "Ronit";
let city = 'Indore';
let msg = `Hello World`;
// ✔ Strings can be written using

// Double quotes " "
// Single quotes ' '
// Backticks ` ` (template literals)

let str = "JavaScript";
console.log(str.length); // 10
console.log(str[0]); // J
console.log(str[4]); // S

// ⭐⭐Strings cannot be changed directly.
let s = "Hello";
s[0] = "Y";   // No change
console.log(s); // Hello


// ⭐⭐
let ptr = "JavaScript";

console.log(ptr.toUpperCase()); // JAVASCRIPT
console.log(ptr.toLowerCase()); // javascript
