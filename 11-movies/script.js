function displayAllMovies(movies) {
    const moviesList = document.querySelector("#movies");
    
    // remove all existing movies first
    moviesList.innerHTML = "";
    for (let eachMovie of movies) {
        // 1. Create an element to store the card
        const movieCardEl = document.createElement("div");
        moviesList.appendChild(movieCardEl);

        // <div class="card" style="width: 18rem"></div>
        movieCardEl.className = "card mt-1 mb-1";
        movieCardEl.style.width = "18rem";

        movieCardEl.innerHTML = `
         <div class="card-body">
          <h5 class="card-title">${eachMovie.title}</h5>
          <p class="card-text">Genre: ${eachMovie.genre}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
    }
}

displayAllMovies(movies);

// add movie  button
document.querySelector("#addMovieBtn").addEventListener("click", function(){
    // get the inputs from the form
    const title = document.querySelector("#title").value;
    const genre = document.querySelector("#genre").value;

    // process input: create a new movie object
    // and add it to the movie list
    addMovie(movies, title, genre);

    // refresh the movie display
    displayAllMovies(movies);

}) // end add event listener

// DOMContentLoaded is an event that happens on document automatcially
// when the web page finishes loading
document.addEventListener("DOMContentLoaded", async function(){
   // the movies variable below is the global movies from `data.js`
    movies = await getData();
    displayAllMovies(movies);

})

document.querySelector("#saveBtn").addEventListener("click", async function(){
    saveData();
})