// in the browser, all variables in the global scope
// can be used by other JavaScript files included
// in the html
let todos = [
    {
        "id":  1,
        "description":"Wash the car",
        "done": false,
        "date": "2026-04-07"
    },
        {
        "id":  2,
        "description":"Clean the room",
        "done": false,
        "date": "2026-04-08"
    },
        {
        "id":  3,
        "description":"Go to gym",
        "done": false,
        "date": "2026-04-09"
    }
]

function addTodo(todos, description, date) {
    let newTodo = {
        id: Math.floor(Math.random() * 100000 + 1),
        description: description,
        date: date,
        done: false
    }
    todos.push(newTodo);
}