const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadHistoryButton = document.getElementById("load-history");
const addWeatherButton = document.getElementById("add-weather");
const editWeatherButton = document.getElementById("edit-weather");
const listDiv = document.getElementById("list");
const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");

loadWeatherHistory();

loadHistoryButton.addEventListener("click", loadWeatherHistory);
addWeatherButton.addEventListener("click", addWeather);
editWeatherButton.addEventListener("click", editWeather);

async function addWeather() {
    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    if (!location || !temperature || !date) {
        return;
    }

    clearInputs();
    const weatherObject = { location, temperature, date };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(weatherObject)
    });

    if (!response.ok) {
        return;
    }

    await loadWeatherHistory();
}

async function editWeather() {
    const location = locationInput.value;
    const temperature = temperatureInput.value;
    const date = dateInput.value;

    if (!location || !temperature || !date) {
        return;
    }

    clearInputs();
    const weatherId = editWeatherButton.getAttribute("data-weather-id");
    const editWeatherObject = { location, temperature, date, _id: weatherId };

    const response = await fetch(`${baseURL}/${weatherId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editWeatherObject)
    });

    if (!response.ok) {
        return;
    }

    await loadWeatherHistory();
    editWeatherButton.removeAttribute("data-weather-id");
    editWeatherButton.setAttribute("disabled", "disabled");
    addWeatherButton.removeAttribute("disabled");
}

async function loadWeatherHistory() {
    listDiv.innerHTML = "";

    try {
        const response = await fetch(baseURL);
        const responseAsJson = await response.json();
        const historyObjects = Object.values(responseAsJson);

        historyObjects.forEach(weather => {
            listDiv.appendChild(createWeatherHTML(weather));
        });

    } catch (error) {
        console.log(error.message);
    }
}

function createWeatherHTML({ location, temperature, date, _id }) {
    const locationH2 = document.createElement("h2");
    locationH2.textContent = location;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = date;
    const temperatureH3 = document.createElement("h3");
    temperatureH3.id = "celsius";
    temperatureH3.textContent = temperature;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteWeather);
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-container");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(locationH2);
    containerDiv.appendChild(dateH3);
    containerDiv.appendChild(temperatureH3);
    containerDiv.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        locationInput.value = location;
        temperatureInput.value = temperature;
        dateInput.value = date;

        containerDiv.remove();
        editWeatherButton.setAttribute("data-weather-id", _id);
        editWeatherButton.removeAttribute("disabled");
        addWeatherButton.setAttribute("disabled", "disabled");
    });

    async function deleteWeather() {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        containerDiv.remove();

        await loadWeatherHistory();
    }

    return containerDiv;
}

function clearInputs() {
    locationInput.value = "";
    temperatureInput.value = "";
    dateInput.value = "";
}