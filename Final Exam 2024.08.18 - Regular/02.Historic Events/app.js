window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById("name");
    const timeInput = document.getElementById("time");
    const descriptionTextarea = document.getElementById("description");

    const previewListUl = document.getElementById("preview-list");
    const archiveListUl = document.getElementById("archive-list");

    const addButton = document.getElementById("add-btn");

    addButton.addEventListener("click", addEventToPreviewList);

    function addEventToPreviewList() {
        const name = nameInput.value;
        const time = timeInput.value;
        const description = descriptionTextarea.value;

        if (!name || !time || !description) {
            return;
        }

        clearInputs();
        const historicLi = createHistoricEvent(name, time, description);
        previewListUl.appendChild(historicLi);
        addButton.setAttribute("disabled", "disabled");
    }

    function createHistoricEvent(name, time, description) {
        const namePar = document.createElement("p");
        namePar.textContent = name;
        const timePar = document.createElement("p");
        timePar.textContent = time;
        const descPar = document.createElement("p");
        descPar.textContent = description;
        const articleEl = document.createElement("article");
        articleEl.appendChild(namePar);
        articleEl.appendChild(timePar);
        articleEl.appendChild(descPar);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.classList.add("next-btn");
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(nextButton);

        const liElement = document.createElement("li");
        liElement.appendChild(articleEl);
        liElement.appendChild(buttonsDiv);

        editButton.addEventListener("click", () => {
            nameInput.value = name;
            timeInput.value = time;
            descriptionTextarea.value = description;

            addButton.removeAttribute("disabled");
            liElement.remove();
        });

        nextButton.addEventListener("click", () => {
            buttonsDiv.remove();

            const archiveButton = document.createElement("button");
            archiveButton.textContent = "Archive";
            archiveButton.classList.add("archive-btn");

            liElement.appendChild(archiveButton);
            archiveListUl.appendChild(liElement);

            archiveButton.addEventListener("click", deleteEvent);
        });

        return liElement;
    }

    function deleteEvent(e) {
        const eventLi = e.currentTarget.parentElement;
        eventLi.remove();
        addButton.removeAttribute("disabled");
    }

    function clearInputs() {
        nameInput.value = "";
        timeInput.value = "";
        descriptionTextarea.value = "";
    }
}