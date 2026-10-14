/*
JavaScript has TWO categories of data types:

1) Primitive Data Types
2) Non-Primitive (Reference) Data Types
*/

/*
----------------------------------------------------
1) PRIMITIVE DATA TYPES (7)
----------------------------------------------------

Primitive data types store single values.
*/

/*
1) Number
Used to store integers and decimals.

JavaScript example:
*/
let a = 10;
let b = 3.5;

/*
2) String
Used to store text.

JavaScript example:
*/
let name = "Ronit";

/*
3) Boolean
Used to store true or false.

JavaScript example:
*/
let isLoggedIn = true;

/*
4) Undefined
Variable declared but not assigned a value.

JavaScript example:
*/
let x;

/*
5) Null
Represents intentional empty value.

JavaScript example:
*/
let y = null;

/*
6) BigInt
Used for very large integers.

JavaScript example:
*/
let big = 12345678901234567890n;

/*
7) Symbol
Used to create unique values.

JavaScript example:
*/
let id = Symbol("id");
console.log(id);

/*
----------------------------------------------------
2) NON-PRIMITIVE (REFERENCE) DATA TYPES
----------------------------------------------------

Non-primitive types store multiple values.
They are mutable.
*/

/*
1) Object
Stores key-value pairs.

JavaScript example:
*/
let student = { name: "Ronit", age: 21 };

/*
2) Array
Stores multiple values of same type or diff types.
JavaScript example:
*/
let marks = [90, 85, 80];

/*
3) Function
Block of reusable code.

JavaScript example:
*/
function add(a, b) {
  return a + b;
}


/*
----------------------------------------------------
INTERVIEW ONE-LINER
----------------------------------------------------

JavaScript has 7 primitive and 3 non-primitive data types.
*/
