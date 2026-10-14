/*
====================================================
            ARRAY IN JAVASCRIPT
====================================================

An array is a non-primitive data type used to store
multiple values in a single variable.

Arrays are index-based.
Index starts from 0.
*/

/*
----------------------------------------------------
1) Creating an Array
----------------------------------------------------
*/

let numbers = [10, 20, 30, 40];
let names = ["Ronit", "Aman", "Rahul"];

console.log(numbers);
console.log(names);

/*
----------------------------------------------------
2) Accessing Array Elements
----------------------------------------------------
*/

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

/*
----------------------------------------------------
3) Modifying Array Elements
----------------------------------------------------
*/

numbers[1] = 25;
console.log(numbers);

/*
----------------------------------------------------
4) Array Length
----------------------------------------------------
*/

console.log(numbers.length);

/*
----------------------------------------------------
5) Adding Elements
----------------------------------------------------
*/

numbers.push(50);      // add at end
numbers.unshift(5);    // add at start⭐⭐
console.log(numbers);

/*
----------------------------------------------------
6) Removing Elements
----------------------------------------------------
*/

numbers.pop();         // remove from end
numbers.shift();       // remove from start⭐⭐
console.log(numbers);

/*
----------------------------------------------------
7) Array Methods⭐⭐
----------------------------------------------------
*/

let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3));
console.log(arr.indexOf(4));
// arr.slice(start, end)
// start -> index to begin(included)
// end -> index to end(exculed)
console.log(arr.slice(1, 4));

/*
----------------------------------------------------
8) Looping through Array
----------------------------------------------------
*/

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of loop
for (let value of arr) {
  console.log(value);
}

/*
----------------------------------------------------
9) Array with Different Data Types
----------------------------------------------------
*/

let mixed = [10, "Hello", true, null];
console.log(mixed);

/*
----------------------------------------------------
10) Array vs Object
----------------------------------------------------

Array  → index-based   → []
Object → key-value     → {}
*/

/*
----------------------------------------------------
11) typeof Array
----------------------------------------------------
*/

console.log(typeof arr); // object

/*
----------------------------------------------------
INTERVIEW ONE-LINER
----------------------------------------------------

Array is a non-primitive data type used to store
multiple values in a single variable.
*/
