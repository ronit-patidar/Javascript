async function fetchData() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();
// fetch() sends an HTTP request and returns a Promise.
// await waits for the response.
// response.json() parses the response body and also returns a Promise.
// If an error is thrown or a Promise rejects, execution enters the catch block.
// Note that fetch() does not automatically reject for HTTP error statuses such as 404, so checking response.ok is useful.