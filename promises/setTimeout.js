// setTimeout() → Executes a callback once after a specified delay.
// setTimeout(callback, delay);
// callback: The function to execute.
// delay: The delay in milliseconds.
// 1000 milliseconds = 1 second.
let timer = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(timer);
