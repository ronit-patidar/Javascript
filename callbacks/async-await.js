// async and await are JavaScript keywords that make asynchronous code easier to write and understand.
// The async keyword is used before a function declaration to make that function return a Promise.
// Remember: An async function always returns a Promise.
// The await keyword is used to wait for a Promise to settle and obtain its fulfilled value.
async function greet() {
    return "Hello Ronit";
}

async function main() {
    let result = await greet();
    console.log(result);
}

main();