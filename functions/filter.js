// 🔍 filter() in JavaScript

// filter() is used to select elements from an array based on a condition
// 👉 Returns a NEW array
// 👉 Original array is NOT changed
let nums = [1, 2, 3, 4, 5, 6];

let even = nums.filter(n => n % 2 === 0);

console.log(even);
// [2, 4, 6]
