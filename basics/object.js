/*
====================================================
            OBJECT IN JAVASCRIPT
====================================================

An object in JavaScript is a collection of
key-value pairs.

Format:
key : value
*/

/*
----------------------------------------------------
1) Creating an Object
----------------------------------------------------
*/

let student = {
  name: "Ronit",
  age: 21,
  isPass: true
};

/*
----------------------------------------------------
2) Accessing Object Properties
----------------------------------------------------
*/

// Dot notation
console.log(student.name);
console.log(student.age);

// Bracket notation
console.log(student["isPass"]);

/*
----------------------------------------------------
3) Modifying Object Properties
----------------------------------------------------
*/

student.age = 22;          // update
student.city = "Indore";  // add new property

console.log(student);

/*
----------------------------------------------------
4) Deleting Object Property
----------------------------------------------------
*/

delete student.isPass;
console.log(student);

/*
----------------------------------------------------
5) Object with Method (Function inside object)
----------------------------------------------------
*/

let user = {
  name: "Ronit",
  greet: function () {
    console.log("Hello, Welcome!");
  }
};

user.greet();

/*
----------------------------------------------------
6) Object using const
----------------------------------------------------
*/

const person = {
  name: "Aman",
  age: 20
};

// Allowed (modifying value)
person.name = "Rahul";

// Not allowed (reassignment)
// person = {};  // ❌ error

console.log(person);

/*
----------------------------------------------------
7) Nested Object
----------------------------------------------------
*/

let employee = {
  id: 101,
  address: {
    city: "Indore",
    pincode: 452001
  }
};

console.log(employee.address.city);

/*
----------------------------------------------------
8) Object vs Array
----------------------------------------------------

Object  → key : value pairs  → {}
Array   → index based        → []
*/

let arr = [10, 20, 30];
let obj = { a: 10, b: 20 };

/*
----------------------------------------------------
9) typeof Operator
----------------------------------------------------
*/

console.log(typeof obj);   // object
console.log(typeof arr);   // object (JS behavior)

/*
----------------------------------------------------
INTERVIEW ONE-LINER
----------------------------------------------------

Objects are non-primitive data types used to store
multiple values in key-value format.
*/
