// Higher-Order Functions in JavaScript
// A Higher-Order Function (HOF) is a function that does at least one of these two things:
// 1. Takes another function as an argument.
// 2. Returns another function.
// In simple words, a function that works with another function is called a Higher-Order Function.
function outer() {
    return function inner() {
        console.log("Hello from inner function");
    };
}

const result = outer();

result();