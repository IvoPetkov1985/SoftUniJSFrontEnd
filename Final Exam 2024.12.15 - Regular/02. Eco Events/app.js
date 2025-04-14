window.addEventListener("load", solve);

function solve() {
    const emailInput = document.getElementById("email");
    const eventInput = document.getElementById("event");
    const locationInput = document.getElementById("location");
    const nextButton = document.getElementById("next-btn");
    const previewListUl = document.getElementById("preview-list");
    const eventListUl = document.getElementById("event-list");

    nextButton.addEventListener("click", addEventToPreview);

    function addEventToPreview(e) {
        e.preventDefault();

        const email = emailInput.value;
        const event = eventInput.value;
        const location = locationInput.value;

        if (!email || !event || !location) {
            return;
        }

        clearInputs();
        const eventLiElement = createEventHTML(email, event, location);
        previewListUl.appendChild(eventLiElement);
        nextButton.setAttribute("disabled", "disabled");
    }

    function createEventHTML(email, event, location) {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h4>${email}</h4>
            <p><strong>Event:</strong><br>${event}</p>
            <p><strong>Location:</strong><br>${location}</p>`;

        const editButton = document.createElement("button");
        editButton.classList.add("action-btn", "edit");
        editButton.textContent = "edit";
        const applyButton = document.createElement("button");
        applyButton.classList.add("action-btn", "apply");
        applyButton.textContent = "apply";

        const liElement = document.createElement("li");
        liElement.classList.add("application");
        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(applyButton);

        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            emailInput.value = email;
            eventInput.value = event;
            locationInput.value = location;

            nextButton.removeAttribute("disabled");
            liElement.remove();
        });

        applyButton.addEventListener("click", (e) => {
            e.preventDefault();
            liElement.removeChild(editButton);
            liElement.removeChild(applyButton);
            eventListUl.appendChild(liElement);
            nextButton.removeAttribute("disabled");
        });

        return liElement;
    }

    function clearInputs() {
        emailInput.value = "";
        eventInput.value = "";
        locationInput.value = "";
    }
}