const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

// fetch is an asynchronous function
// synchronous operation: do A, when A finished, do B
// aysnchronous operation: do A, before A finished, do B, then when A finished, clean up A
// when the browsers fetch from a URL, it takes a significant amount of time
// the fetch function returns a promise
// a promise a function that will execute when the process finished
// fetch(url).then(function (response) {
//     return response.text();
// }).then(function (text) {
//     console.log(text);
// });
// console.log("After fetch");

// using await/async
async function run() {
    // when we use await, we must use it with a promisew
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
    document.querySelector("#output").innerHTML = text;
}
run();