const promise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("✅ Data fetched!");   // success
        } else {
            reject("❌ Something failed"); // failure
        }
    }, 1000);
});

promise
    .then(result => console.log(result))  // ✅ Data fetched!
    .catch(err  => console.log(err));