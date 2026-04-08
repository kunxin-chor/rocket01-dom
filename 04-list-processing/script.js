function displayTodos(todos) {
    let todoList = document.querySelector("#list");
    todoList.innerHTML = "";
    for (let t of todos) {

        // create a new html element using JavaScript

        // create a new <li>
        let newListItem = document.createElement("li");
        // add the new <li> into the <ul#list>
        todoList.appendChild(newListItem);

        // newListItem.innerHTML = "t.description"
        newListItem.innerHTML = `${t.description} (done:${t.done}, date:${t.date}) 
                                 <a class="btn-delete" href="#">🗑️</a>
                                 <a class="btn-update" href="#">✏️</a>
                                 
                                 `

        // querySelector and querySelectorAll can be called on any HTML element
        const deleteButton = newListItem.querySelector(".btn-delete");
        deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            deleteTodo(todos, t.id);
            displayTodos(todos);
        })

        const updateButton = newListItem.querySelector(".btn-update");
        updateButton.addEventListener("click", function (event) {
            event.preventDefault();
            // the second parameter of the prompt function will be the default
            const newDescription = prompt("Enter the new description", t.description);
            const newDone = prompt("Enter y if it is done") == "y";
            const newDate = prompt("Enter the date", t.date);
            updateTodo(todos, t.id, newDescription, newDone, newDate);
            displayTodos(todos);
        })

    }
}

let form = document.querySelector("#add-new-todo");
form.addEventListener("submit", function (event) {
    // prevent the browser to submit the form
    event.preventDefault();

    let form = event.target;
    let description = form.elements.description.value;
    let date = form.elements.date.value;

    addTodo(todos, description, date)
    displayTodos(todos);
})



displayTodos(todos);