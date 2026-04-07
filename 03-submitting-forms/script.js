let form = document.querySelector("#healthCheckForm");

// addEventListener can recieve one optional parameter representing
// the event. It's an object
form.addEventListener("submit", function(event){
    // 1. prevent the default event behaviour
    event.preventDefault();

    // 2. get the form that is being submited
    // `event.target` - the HTML element which the event has happened on
    let form = event.target;
    console.log(form.elements);
    let email = form.elements.email.value;
    let weight = parseFloat(form.elements.weight.value);
    let height = parseFloat(form.elements.height.value);
    let gender = form.elements.gender.value;

    let allHealthProblems = form.elements.health;
    let selectedHealthProblems = [];
    for (let checkbox of allHealthProblems) {
        if (checkbox.checked) {
            selectedHealthProblems.push(checkbox.value)
        }
    }
    console.log(email, weight, height, gender, selectedHealthProblems);

    let bmi = weight / height ** 2;

    // 3. then submit if there is problem
    let resultSpan = document.querySelector("#bmi");
    resultSpan.innerHTML = bmi;


    console.log("form is submitted");
})