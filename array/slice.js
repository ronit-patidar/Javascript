// ✂️ slice() in JavaScript

// slice() is used to extract a portion of an array or string
// 👉 It does NOT change the original array/string

// array.slice(start, end)
// start → index to begin (included)
// end → index to stop (excluded)

let arr = [10, 20, 30, 40, 50];

let copy = arr.slice();
console.log(copy);

let part = arr.slice(1, 4);
console.log(part); // [20, 30, 40]
console.log(arr);  // [10, 20, 30, 40, 50]

arr.slice(2);
// [30, 40, 50]

arr.slice(0, 3);
// [10, 20, 30]

// negative index in slice
        // -5,-4,-3,-2,-1
let brr = [10, 20, 30, 40, 50];

arr.slice(-2);
// [40, 50]

arr.slice(-4, -1);
// [20, 30, 40]

