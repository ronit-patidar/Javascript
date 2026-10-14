// 1) Arithimatic operations
let a = 10, b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus → 1
console.log(a ** b); // Exponentiation → 1000

// 2) Assignment operations
let x = 10;

x += 5; // x = x + 5 → 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 4; // 2

// 3) Relational operations (result is true/false)
let g = 5, h = "5";

console.log(g == h);  // true  (value check)
console.log(g === h); // false (value + type check)
console.log(g != h);  // false
console.log(g !== h); // true
console.log(g > 3);   // true
console.log(g <= 5);  // true

// 4) Bitwise Operations
let p = true, q = false;

console.log(p && q); // AND → false
console.log(p || q); // OR → true
console.log(!p);     // NOT → false

// 5) Unary Operations
let z = 5;

console.log(++z); // Pre-increment → 6
console.log(z--); // Post-decrement → 6
console.log(typeof z); // "number"

// 6) Ternary Operations
let marks = 33;
let result = (marks >= 33) ? "Pass" : "Fail";
console.log(result);

// 7) String Operations
let firstName = "Ronit";
let lastName = "Patidar";
let fullName = firstName + " " +  lastName; // Concatenation
console.log(fullName);

