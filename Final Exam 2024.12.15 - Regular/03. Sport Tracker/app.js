const baseURL = "http://localhost:3030/jsonstore/workout";

const workoutInput = document.getElementById("workout");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");
const loadWorkoutButton = document.getElementById("load-workout");
const addWorkoutButton = document.getElementById("add-workout");
const editWorkoutButton = document.getElementById("edit-workout");
const listDiv = document.getElementById("list");

loadWorkoutButton.addEventListener("click", loadWorkouts);
addWorkoutButton.addEventListener("click", addWorkout);
editWorkoutButton.addEventListener("click", editWorkout);

async function addWorkout() {
    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;

    if (!workout || !location || !date) {
        return;
    }

    clearInputs();
    const workoutObj = { workout, location, date };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(workoutObj)
    });

    if (!response.ok) {
        return;
    }

    await loadWorkouts();
}

async function editWorkout() {
    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;

    if (!workout || !location || !date) {
        return;
    }

    clearInputs();
    const workoutId = editWorkoutButton.getAttribute("data-workout-id");
    const editWorkoutObj = { workout, location, date, _id: workoutId };

    const response = await fetch(`${baseURL}/${workoutId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editWorkoutObj)
    });

    if (!response.ok) {
        return;
    }

    await loadWorkouts();
    editWorkoutButton.removeAttribute("data-workout-id");
    editWorkoutButton.setAttribute("disabled", "disabled");
    addWorkoutButton.removeAttribute("disabled");
}

async function loadWorkouts() {
    listDiv.innerHTML = "";
    const response = await fetch(baseURL);
    const jsonResponse = await response.json();
    const workoutsObjects = Object.values(jsonResponse);

    workoutsObjects.forEach(workout => {
        listDiv.appendChild(createWorkoutHTML(workout));
    });
}

function createWorkoutHTML({ workout, location, date, _id }) {
    const workoutH2 = document.createElement("h2");
    workoutH2.textContent = workout;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = date;
    const locationH3 = document.createElement("h3");
    locationH3.textContent = location;
    locationH3.classList.add("location");

    const changeButton = document.createElement("button");
    changeButton.textContent = "Change";
    changeButton.classList.add("change-btn");
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("delete-btn");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-container");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(doneButton);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(workoutH2);
    containerDiv.appendChild(dateH3);
    containerDiv.appendChild(locationH3);
    containerDiv.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        workoutInput.value = workout;
        dateInput.value = date;
        locationInput.value = location;

        containerDiv.remove();
        editWorkoutButton.removeAttribute("disabled");
        editWorkoutButton.setAttribute("data-workout-id", _id);
        addWorkoutButton.setAttribute("disabled", "disabled");
    });

    doneButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE"
        });

        containerDiv.remove();
        await loadWorkouts();
    });

    return containerDiv;
}

function clearInputs() {
    workoutInput.value = "";
    locationInput.value = "";
    dateInput.value = "";
}