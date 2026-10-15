// setInterval() → Repeatedly executes a callback at a specified interval until stopped.
// setInterval(callback, delay);
let count = 1;

let timer = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(timer);
    }
}, 1000);
//This continues until the interval is stopped or the environment stops running the code.
// Here, setInterval() returns an ID, which is stored in timer. clearInterval(timer) stops future interval callbacks.