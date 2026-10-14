// | slice()                  | splice()                 |
// | ------------------------ | ------------------------ |
// | does NOT change original | changes original         |
// | returns new array        | returns removed elements |
// | used for copying         | used for add/remove      |

// ✂️ splice() in JavaScript Array

// splice() is used to add, remove, or replace elements
// ⚠️ It changes the original array

// array.splice(start, deleteCount, item1, item2, ...)
// array.splice(start, deleteCount, item1, item2, ...)

let arr = [10, 20, 30, 40, 50];

// 2️⃣ Remove Elements
arr.splice(1, 2);
console.log(arr);
// [10, 40, 50]

// 3️⃣ Add Elements
let brr = [10, 20, 30];
brr.splice(1, 0, 15, 18);
console.log(brr);
// [10, 15, 18, 20, 30]

// 4️⃣ Replace Elements
let crr = [10, 20, 30, 40];

crr.splice(2, 1, 35);
console.log(crr);
// [10, 20, 35, 40]

// 5️⃣ Store Removed Elements
let drr = [1, 2, 3, 4, 5];

let removed = drr.splice(1, 3);
console.log(removed); // [2, 3, 4]
console.log(drr);     // [1, 5]

// 6️⃣ Negative Index in splice()
let err = [10, 20, 30, 40, 50];

err.splice(-2, 1);
console.log(err);
// [10, 20, 30, 50]

// Use slice() when you don’t want to change the array
// Use splice() when you want to modify the array