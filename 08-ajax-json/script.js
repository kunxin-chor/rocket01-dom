async function run() {
    const response = await axios.get("person.json")
    // response.data will be an object
    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `
     <p>Name: ${response.data.name}</p>
     <p>Age: ${response.data.age}</p>
     <p>Role: ${response.data.role}</p>
     <p>Salary: ${response.data.salary}</p>
    `

}

async function loadStaff() {
    const response = await axios.get("staff.json");
    console.log(response.data);
    for (let eachStaff of response.data) {
        const newLi = document.createElement("li");
        const staffUl = document.querySelector("#staff");
        staffUl.appendChild(newLi);
        newLi.innerHTML = `ID: ${eachStaff.id}, Name: ${eachStaff.name}`

    }
}

run();
loadStaff();