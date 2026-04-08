const url="https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";
// response is an object representing what the url sends back
axios.get(url).then(function(response){
    // actual useable data is in response.data
    console.log(response.data);
});

// we can only use await in a functon marked as async
async function run() {
    const response = await axios.get(url);
    console.log(response.data);
    document.querySelector("#output").innerHTML = response.data;

}
run();