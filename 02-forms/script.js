let button = document.querySelector("#submitBtn");
button.addEventListener("click", function () {
    // Select the textbox element
    // via name: document.querySelector(`input[name="name"]`)
    let nameTextEl = document.querySelector("#name");
    let name = nameTextEl.value;

    let selectedAgeEl = document.querySelector(".age:checked");
    let selectedAgeGroup = selectedAgeEl.value;

    let selectedCheckboxesEl = document.querySelectorAll(".activities:checked");

    let selectedActivities = [];
    // for (let i = 0; i < selectedCheckboxesEl.length; i++) {
    //      selectedActivities.push(selectedCheckboxesEl[i].value);
    // }
   
    for (let checkbox of selectedCheckboxesEl) {
        selectedActivities.push(checkbox.value);
    }

    // let selectedActivities2 = selectedCheckboxesEl.map(checkbox=> checkbox.value)

    // get the selected country
    let countrySelectEl = document.querySelector("#country");
    let country = countrySelectEl.value;

    console.log("Name =", name);
    console.log("Selected Age Group = ", selectedAgeGroup);
    console.log("Selected activities =", selectedActivities);
    console.log("Selected counrty =", country)
})