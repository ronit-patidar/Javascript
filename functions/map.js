// Use map() when you need a new array
// 🗺️ map() in JavaScript

// map() is used to create a NEW array by applying a function to each element of an array.

// 👉 Original array is NOT changed
let arr = [1, 2, 3, 4];

let squares = arr.map(n => n * n);

console.log(squares);
// [1, 4, 9, 16]

let nums = [10, 20, 30];

let result = nums.map((val, i) => val + i);
console.log(result);
// [10, 21, 32]

