// ➕ reduce() in JavaScript

// reduce() is used to reduce an array to a single value
// (single number, string, object, array, etc.)

// | Method   | Result       |
// | -------- | ------------ |
// | map()    | new array    |
// | filter() | subset array |
// | reduce() | single value |

// 1️⃣ Syntax
// array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);


// accumulator → result so far

// currentValue → current element

// initialValue → starting value (important)

// 2️⃣ Sum of Numbers
let num = [10,20,30,40,50];
let sum = num.reduce((acc,val)=>acc+val,0)
console.log(sum);

// 3️⃣ Product of Numbers
let product = num.reduce((acc,val)=>acc*val,1);
console.log(product);

// 4️⃣ Find Maximum
let maxi = num.reduce((acc,val)=> acc > val ? acc : val,Infinity);
console.log(maxi);

// 5️⃣ Find Minimum
let mini = num.reduce((acc,val)=>acc<val ? acc:val,-Infinity);
console.log(mini);

// 🧠 Why Infinity & -Infinity?

// Infinity → bigger than any number

// -Infinity → smaller than any number
// Perfect replacement for INT_MAX / INT_MIN in JS.