let movies = [
    {
        "id": 1,
        "title":"The Lord of the Rings",
        "genre": "fantasy"
    },
    {
        "id": 2,
        "title":"Top Gun Maverick",
        "genre":"action"
    },
    {
        "id": 3,
        "title":"F1 Movie",
        "genre":"action"
    }
    
]

function addMovie(movies, title, genre) {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newMovie = {
        id: id,
        title: title,
        genre: genre
    }
    movies.push(newMovie);
}