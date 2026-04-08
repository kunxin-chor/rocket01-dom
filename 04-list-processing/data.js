// in the browser, all variables in the global scope
// can be used by other JavaScript files included
// in the html
let todos = [
    {
        "id": 1,
        "description": "Wash the car",
        "done": false,
        "date": "2026-04-07"
    },
    {
        "id": 2,
        "description": "Clean the room",
        "done": false,
        "date": "2026-04-08"
    },
    {
        "id": 3,
        "description": "Go to gym",
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

function deleteTodo(todos, idToDelete) {
    let indexToDelete = -1;
    // use a traditional for loop because we need
    // the index
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == idToDelete) {
            indexToDelete = i;
            break;
        }
    }

    todos.splice(indexToDelete, 1);
}

// when we do the update operation, we assume the user is changing
// all the details of the record (except the id)
function updateTodo(todos, idToUpdate, newDescription, newDone, newDate) {
    let indexToUpdate = -1;

    // given the id of the todo that we are changing, what is its index?
    // arrays have a findIndex function
    // it takes one parameter, which is a function
    // all items in the array will be passed to the function one by one
    // if the function returns true, then we will take the index of that item
    indexToUpdate = todos.findIndex(task => task.id == idToUpdate);
    todos[indexToUpdate] = {
        id: idToUpdate,
        description: newDescription,
        done: newDone,
        date: newDate
    }



}