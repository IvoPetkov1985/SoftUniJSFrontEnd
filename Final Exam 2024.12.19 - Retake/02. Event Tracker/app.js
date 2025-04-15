window.addEventListener("load", solve);

function solve() {
    const upcomingListUl = document.getElementById("upcoming-list");
    const endedEventsListUl = document.getElementById("events-list");
    const saveButton = document.getElementById("save");
    const deleteButton = document.querySelector("#events button");
    const eventInput = document.getElementById("event");
    const noteInput = document.getElementById("note");
    const dateInput = document.getElementById("date");

    saveButton.addEventListener("click", addEventToList);
    deleteButton.addEventListener("click", deleteAllEndedEvents);

    function addEventToList() {
        const eventName = eventInput.value;
        const note = noteInput.value;
        const date = dateInput.value;

        if (!eventName || !note || !date) {
            return;
        }

        clearInputs();
        const eventLiElement = createEventHTML(eventName, note, date);
        upcomingListUl.appendChild(eventLiElement);
    }

    function createEventHTML(name, note, date) {
        const namePar = document.createElement("p");
        namePar.textContent = `Name: ${name}`;
        const notePar = document.createElement("p");
        notePar.textContent = `Note: ${note}`;
        const datePar = document.createElement("p");
        datePar.textContent = `Date: ${date}`;
        const articleElement = document.createElement("article");
        articleElement.appendChild(namePar);
        articleElement.appendChild(notePar);
        articleElement.appendChild(datePar);

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "edit");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editEvent);

        const doneButton = document.createElement("button");
        doneButton.classList.add("btn", "done");
        doneButton.textContent = "Done";
        doneButton.addEventListener("click", moveEventToEnded);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);

        const eventContainerDiv = document.createElement("div");
        eventContainerDiv.classList.add("event-container");
        eventContainerDiv.appendChild(articleElement);
        eventContainerDiv.appendChild(buttonsDiv);

        const liItem = document.createElement("li");
        liItem.classList.add("event-item");
        liItem.appendChild(eventContainerDiv);

        function editEvent() {
            eventInput.value = name;
            noteInput.value = note;
            dateInput.value = date;

            liItem.remove();
        }

        function moveEventToEnded() {
            liItem.removeChild(eventContainerDiv);
            liItem.appendChild(articleElement);
            endedEventsListUl.appendChild(liItem);
        }

        return liItem;
    }

    function deleteAllEndedEvents() {
        endedEventsListUl.innerHTML = "";
    }

    function clearInputs() {
        eventInput.value = "";
        noteInput.value = "";
        dateInput.value = "";
    }
}