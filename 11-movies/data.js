const BASE_API_URL="https://api.jsonbin.io/v3";

// BIN_ID is available after creating a JSON BIN
const BIN_ID = "69d74a83aaba882197dc0e0b";

let movies = [
   // all testing movies removed when JSON bin is added
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

async function getData() {
    // const url = BASE_API_URL + "/b/" + BIN_ID + "/latest";
    const url = `${BASE_API_URL}/b/${BIN_ID}/latest`;
    const response = await axios.get(url);

    // return the `record` property from response.data which store
    // the JSON data
    return response.data.record;
}

async function saveData() {
    const url = `${BASE_API_URL}/b/${BIN_ID}`;
    // we use axios.put because to updat a JSON BIN,
    // the API docs say to use `PUT`
    const response = await axios.put(url, movies);
    return response.data;
}