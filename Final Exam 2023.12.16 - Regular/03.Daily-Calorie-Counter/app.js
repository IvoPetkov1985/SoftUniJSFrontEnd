const baseURL = "http://localhost:3030/jsonstore/tasks";
const loadMealsButton = document.getElementById("load-meals");
const addMealButton = document.getElementById("add-meal");
const editMealButton = document.getElementById("edit-meal");

const mealsListDiv = document.getElementById("list");

const foodInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");

loadMealsButton.addEventListener("click", loadMeals);
addMealButton.addEventListener("click", addMeal);
editMealButton.addEventListener("click", editMeal);

async function addMeal() {
    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    if (food === "" || time === "" || calories === "") {
        return;
    }

    const mealObj = { food, calories, time };
    clearInputs();

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(mealObj)
    });

    if (!response.ok) {
        return;
    }

    await loadMeals();
}

async function editMeal(e) {
    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    if (food === "" || time === "" || calories === "") {
        return;
    }

    const mealId = editMealButton.getAttribute("data-meal-id");
    const editMealObj = { food, calories, time, _id: mealId };
    clearInputs();

    const response = await fetch(`${baseURL}/${mealId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editMealObj)
    });

    if (!response.ok) {
        return;
    }

    await loadMeals();
    editMealButton.removeAttribute("data-meal-id");
    editMealButton.setAttribute("disabled", "disabled");
    addMealButton.removeAttribute("disabled");
}

async function loadMeals() {
    mealsListDiv.innerHTML = "";

    const request = await fetch(baseURL);
    const response = await request.json();
    const mealsObjects = Object.values(response);
    const fragment = document.createDocumentFragment();

    mealsObjects.forEach(meal => {
        fragment.appendChild(createMealHTML(meal));
    });

    mealsListDiv.appendChild(fragment);
}

function createMealHTML({ food, time, calories, _id }) {
    const changeButton = document.createElement("button");
    changeButton.textContent = "Change";
    changeButton.classList.add("change-meal");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-meal");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "meal-buttons");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const mealH2 = document.createElement("h2");
    mealH2.textContent = food;
    const timeH3 = document.createElement("h3");
    timeH3.textContent = time;
    const caloriesH3 = document.createElement("h3");
    caloriesH3.textContent = calories;

    const mealDiv = document.createElement("div");
    mealDiv.classList.add("meal");
    mealDiv.appendChild(mealH2);
    mealDiv.appendChild(timeH3);
    mealDiv.appendChild(caloriesH3);
    mealDiv.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        foodInput.value = food;
        timeInput.value = time;
        caloriesInput.value = calories;

        editMealButton.removeAttribute("disabled");
        editMealButton.setAttribute("data-meal-id", _id);
        addMealButton.setAttribute("disabled", "disabled");
        mealDiv.remove();
    });

    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE"
        });

        mealDiv.remove();
        await loadMeals();
    });

    return mealDiv;
}

function clearInputs() {
    foodInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";
}