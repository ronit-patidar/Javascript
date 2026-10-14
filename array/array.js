// array in js is a type of derived datatype which can store multiple values in single varible of diff types or same type.

let arr = [10, 20, 30, 40];
let mixed = [1, "hello", true, null];
console.log(arr[0]); // 10
console.log(arr[3]); // 40

console.log(arr.length); // 4

arr[1] = 25;
console.log(arr); // [10, 25, 30, 40]

arr.push(50);      // add at end
arr.unshift(5);   // add at start

arr.pop();        // remove from end
arr.shift();     // remove from start


