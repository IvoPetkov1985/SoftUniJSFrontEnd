const baseURL = "http://localhost:3030/jsonstore/records";

const loadRecordsButton = document.getElementById("load-records");
const addRecordButton = document.getElementById("add-record");
const editRecordButton = document.getElementById("edit-record");
const recordsListUl = document.getElementById("list");
const nameInput = document.getElementById("p-name");
const stepsInput = document.getElementById("steps");
const caloriesInput = document.getElementById("calories");
const formDiv = document.getElementById("form");

loadRecordsButton.addEventListener("click", loadRecords);
addRecordButton.addEventListener("click", addRecord);
editRecordButton.addEventListener("click", editRecord);

async function addRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    if (!name || !steps || !calories) {
        return;
    }

    clearInputs();
    const recordObject = { name, steps, calories };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(recordObject)
    });

    if (!response.ok) {
        return;
    }

    await loadRecords();
}

async function editRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    if (!name || !steps || !calories) {
        return;
    }

    clearInputs();
    const recordId = formDiv.getAttribute("data-record-id");
    const editRecordObject = { name, steps, calories, _id: recordId };

    const response = await fetch(`${baseURL}/${recordId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editRecordObject)
    });

    if (!response.ok) {
        return;
    }

    await loadRecords();
    formDiv.removeAttribute("data-record-id");
    editRecordButton.setAttribute("disabled", "disabled");
    addRecordButton.removeAttribute("disabled");
}

async function loadRecords() {
    recordsListUl.innerHTML = "";
    const response = await fetch(baseURL);
    const jsonResponse = await response.json();
    const recordsAsObjects = Object.values(jsonResponse);
    const fragmentEl = document.createDocumentFragment();

    recordsAsObjects.forEach(rec => {
        fragmentEl.appendChild(createRecordHTML(rec));
    });

    recordsListUl.appendChild(fragmentEl);
}

function createRecordHTML(record) {
    const namePar = document.createElement("p");
    namePar.textContent = record.name;
    const stepsPar = document.createElement("p");
    stepsPar.textContent = record.steps;
    const caloriesPar = document.createElement("p");
    caloriesPar.textContent = record.calories;
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    infoDiv.appendChild(namePar);
    infoDiv.appendChild(stepsPar);
    infoDiv.appendChild(caloriesPar);

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("btn-wrapper");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const recordLi = document.createElement("li");
    recordLi.classList.add("record");
    recordLi.appendChild(infoDiv);
    recordLi.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        nameInput.value = record.name;
        stepsInput.value = record.steps;
        caloriesInput.value = record.calories;

        formDiv.setAttribute("data-record-id", record._id);
        editRecordButton.removeAttribute("disabled");
        addRecordButton.setAttribute("disabled", "disabled");
    });

    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${record._id}`, {
            method: "DELETE"
        });

        await loadRecords();
    });

    return recordLi;
}

function clearInputs() {
    nameInput.value = "";
    stepsInput.value = "";
    caloriesInput.value = "";
}