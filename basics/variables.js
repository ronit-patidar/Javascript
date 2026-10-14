// variable are containers used to store value/data .
// And, Datatype is label on container what does it store and what operations it can perform.
// ❌var -> (function scoped) or global scope,redeclartion allowed.
// ✅let -> (block scoped),redeclartion not allowed but value can be update.
// ✅const -> (block scoped) one time declare and value cant be changed.

// example of var
var x = 10;
var x = 20;   // redeclaration allowed
x = 30;       // reassignment allowed
console.log(x); // 30

// example of let
let y = 10;
// let y = 20; ❌ redeclaration not allowed
y = 25;        // reassignment allowed
console.log(y); // 25

// example of const
const z = 50;
// z = 60; ❌ reassignment not allowed
console.log(z); // 50

// Block scoped example 
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a); // 10
// console.log(b); ❌ error

// const with objects (important 🔥)
const user = { name: "Ronit" };
user.name = "Patidar"; // allowed
// user = {}; ❌ not allowed

