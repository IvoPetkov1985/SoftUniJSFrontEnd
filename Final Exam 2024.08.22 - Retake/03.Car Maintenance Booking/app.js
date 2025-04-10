const baseURL = "http://localhost:3030/jsonstore/appointments";

const appointmentsListUl = document.getElementById("appointments-list");
const btnContainerDiv = document.getElementById("btn-container");

const modelInput = document.getElementById("car-model");
const serviceSelect = document.getElementById("car-service");
const dateInput = document.getElementById("date");

const addAppointmentBtn = document.getElementById("add-appointment");
const editAppointmentBtn = document.getElementById("edit-appointment");
const loadAppointmentsBtn = document.getElementById("load-appointments");

loadAppointmentsBtn.addEventListener("click", loadAppointments);
addAppointmentBtn.addEventListener("click", addAppointment);
editAppointmentBtn.addEventListener("click", editAppointment);

async function addAppointment() {
    const model = modelInput.value;
    const service = serviceSelect.value;
    const date = dateInput.value;

    if (model === "" || service === "" || date === "") {
        return;
    }

    clearInputs();
    const appointmentObj = { model, service, date };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(appointmentObj)
    });

    if (!response.ok) {
        return;
    }

    await loadAppointments();
}

async function editAppointment() {
    const model = modelInput.value;
    const service = serviceSelect.value;
    const date = dateInput.value;

    if (model === "" || service === "" || date === "") {
        return;
    }

    clearInputs();
    const appointmentId = btnContainerDiv.getAttribute("data-appointment-id");
    const editAppointmentObj = {
        model,
        service,
        date,
        _id: appointmentId
    };

    const response = await fetch(`${baseURL}/${appointmentId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editAppointmentObj)
    });

    if (!response.ok) {
        return;
    }

    await loadAppointments();
    btnContainerDiv.removeAttribute("data-appointment-id");
    editAppointmentBtn.setAttribute("disabled", "disabled");
    addAppointmentBtn.removeAttribute("disabled");
}

async function loadAppointments() {
    appointmentsListUl.innerHTML = "";
    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const appointmentsObjs = Object.values(responseAsJson);

    const fragmentEl = document.createDocumentFragment();

    appointmentsObjs.forEach(apt => {
        fragmentEl.appendChild(createAppointmentHTML(apt));
    });

    appointmentsListUl.appendChild(fragmentEl);
}

function createAppointmentHTML(appointment) {
    const modelH2 = document.createElement("h2");
    modelH2.textContent = appointment.model;
    const serviceH3 = document.createElement("h3");
    serviceH3.textContent = appointment.service;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = appointment.date;

    const changeBtn = document.createElement("button");
    changeBtn.classList.add("change-btn");
    changeBtn.textContent = "Change";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-appointment");
    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);

    const liElement = document.createElement("li");
    liElement.classList.add("appointment");
    liElement.appendChild(modelH2);
    liElement.appendChild(dateH3);
    liElement.appendChild(serviceH3);
    liElement.appendChild(buttonsDiv);

    changeBtn.addEventListener("click", () => {
        modelInput.value = appointment.model;
        serviceSelect.value = appointment.service;
        dateInput.value = appointment.date;

        editAppointmentBtn.removeAttribute("disabled");
        addAppointmentBtn.setAttribute("disabled", "disabled");
        btnContainerDiv.setAttribute("data-appointment-id", appointment._id);
    });

    deleteBtn.addEventListener("click", async () => {
        await fetch(`${baseURL}/${appointment._id}`, {
            method: "DELETE"
        });

        await loadAppointments();
        liElement.remove();
    });

    return liElement;
}

function clearInputs() {
    modelInput.value = "";
    serviceSelect.value = "";
    dateInput.value = "";
}