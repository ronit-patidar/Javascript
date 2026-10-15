function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function main() {
    console.log("Fetching data...");

    let result = await getData();

    console.log(result);
    console.log("Finished");
}

main();
// Here is what each part means:
// - new Promise(...) creates a Promise.
// - setTimeout() schedules the callback to execute after approximately two seconds.
// - resolve("Data received!") fulfills the Promise with that value.
// - await getData() waits for the Promise to settle before continuing inside main().