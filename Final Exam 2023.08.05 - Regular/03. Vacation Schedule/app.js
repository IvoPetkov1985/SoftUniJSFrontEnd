const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadVacationsButton = document.getElementById("load-vacations");
const addVacationButton = document.getElementById("add-vacation");
const editVacationButton = document.getElementById("edit-vacation");

const nameInput = document.getElementById("name");
const daysInput = document.getElementById("num-days");
const dateInput = document.getElementById("from-date");

const vacationsListDiv = document.getElementById("list");

addVacationButton.addEventListener("click", addVacation);
editVacationButton.addEventListener("click", editVacation);
loadVacationsButton.addEventListener("click", loadVacations);

async function loadVacations() {
    vacationsListDiv.innerHTML = "";
    try {
        const response = await fetch(baseURL);
        const responseAsJson = await response.json();
        const vacationsAsObjects = Object.values(responseAsJson);
        const fragment = document.createDocumentFragment();

        vacationsAsObjects.forEach(vacation => {
            fragment.appendChild(createVacationHTML(vacation));
        });

        vacationsListDiv.appendChild(fragment);
    } catch (error) {
        console.log(error.message);
    }
}

async function addVacation() {
    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    clearInputs();
    const postVacationObject = { name, days, date };
    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(postVacationObject)
    });

    if (!response.ok) {
        return;
    }

    await loadVacations();
}

async function editVacation() {
    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    clearInputs();
    const vacationId = editVacationButton.getAttribute("data-vacation-id");
    const editVacationObject = { name, days, date, _id: vacationId };

    const request = await fetch(`${baseURL}/${vacationId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editVacationObject)
    });

    await loadVacations();
    editVacationButton.removeAttribute("data-vacation-id");
    editVacationButton.setAttribute("disabled", "disabled");
    addVacationButton.removeAttribute("disabled");
}

function createVacationHTML({ name, days, date, _id }) {
    const nameH2 = document.createElement("h2");
    nameH2.textContent = name;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = date;
    const daysH3 = document.createElement("h3");
    daysH3.textContent = days;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", populateInputs);
    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", markVacationAsDone);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(nameH2);
    containerDiv.appendChild(dateH3);
    containerDiv.appendChild(daysH3);
    containerDiv.appendChild(changeButton);
    containerDiv.appendChild(doneButton);

    function populateInputs() {
        nameInput.value = name;
        daysInput.value = days;
        dateInput.value = date;

        containerDiv.remove();
        editVacationButton.setAttribute("data-vacation-id", _id);
        editVacationButton.removeAttribute("disabled");
        addVacationButton.setAttribute("disabled", "disabled");
    }

    async function markVacationAsDone() {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        containerDiv.remove();
        await loadVacations();
    }

    return containerDiv;
}

function clearInputs() {
    nameInput.value = "";
    daysInput.value = "";
    dateInput.value = "";
}