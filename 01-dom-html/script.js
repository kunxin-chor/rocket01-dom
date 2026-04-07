// the `document` represents the HTML as an object
// querySelector will select the first HTML element
// that meets the criteria in its parameter
// #changeThemeBtn - find the first elemenet with the
// class '#changeThemeBtn'
let button = document.querySelector("#changeThemeBtn");

// the first parameter to addEventListener is the
// the type of event that we are interested in
// the second parameter is an annyomous fuction
// that is executed when the event happens on the element
button.addEventListener("click", function () {
    // select the first <h1> in the document
    let header = document.querySelector("h1");

    // manipulate the element
    // change its `background-color`
    header.style.backgroundColor = "yellow";

    let header2 = document.querySelector("#tagline");
    header2.innerText = "The best place to park your pets";

    // select all the <li> and put in an array
    let items = document.querySelectorAll("li");

    // this won't work: items.style.backgroundColor = "red";

    // take one li at a time from the array
    // and changes it background color to red
    for (let eachItem of items) {
        eachItem.style.backgroundColor = "red";
    }

    let importantItems = document.querySelectorAll(".important");
    for (let eachItem of importantItems) {
        eachItem.style.color = "yellow";
        eachItem.innerText = eachItem.innerText.toUpperCase();
    }

})
