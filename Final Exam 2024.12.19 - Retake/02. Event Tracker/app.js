window.addEventListener("load", solve);

function solve() {
    const upcomingListUl = document.getElementById("upcoming-list");
    const eventListUl = document.getElementById("events-list");
    const eventInput = document.getElementById("event");
    const noteInput = document.getElementById("note");
    const dateInput = document.getElementById("date");
    const saveButton = document.getElementById("save");
    const deleteEndedEventsButton = document.querySelector("#events button");

    saveButton.addEventListener("click", saveEventToList);
    deleteEndedEventsButton.addEventListener("click", emptyTheEndedEventsList);

    function saveEventToList() {
        const eventName = eventInput.value;
        const shortNote = noteInput.value;
        const eventDate = dateInput.value;

        if (!eventName || !shortNote || !eventDate) {
            return;
        }

        clearInputs();
        const eventItemLi = createEventLi(eventName, shortNote, eventDate);
        upcomingListUl.appendChild(eventItemLi);
    }

    function createEventLi(eventName, shortNote, eventDate) {
        const namePar = document.createElement("p");
        namePar.textContent = `Name: ${eventName}`;
        const notePar = document.createElement("p");
        notePar.textContent = `Note: ${shortNote}`;
        const datePar = document.createElement("p");
        datePar.textContent = `Date: ${eventDate}`;

        const article = document.createElement("article");
        article.appendChild(namePar);
        article.appendChild(notePar);
        article.appendChild(datePar);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("btn", "edit");
        editButton.addEventListener("click", sendEventToEdit);
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("btn", "done");
        doneButton.addEventListener("click", markEventAsDone);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);

        const eventContainerDiv = document.createElement("div");
        eventContainerDiv.className = "event-container";
        eventContainerDiv.appendChild(article);
        eventContainerDiv.appendChild(buttonsDiv);

        const liElement = document.createElement("li");
        liElement.className = "event-item";
        liElement.appendChild(eventContainerDiv);

        function sendEventToEdit() {
            eventInput.value = eventName;
            noteInput.value = shortNote;
            dateInput.value = eventDate;

            liElement.remove();
        }

        function markEventAsDone() {
            liElement.innerHTML = "";
            liElement.appendChild(article);
            eventListUl.appendChild(liElement);
        }

        return liElement;
    }

    function emptyTheEndedEventsList() {
        eventListUl.innerHTML = "";
    }

    function clearInputs() {
        eventInput.value = "";
        noteInput.value = "";
        dateInput.value = "";
    }
}