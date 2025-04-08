window.addEventListener("load", solve);

function solve() {
    const placeInput = document.getElementById("place");
    const actionInput = document.getElementById("action");
    const personInput = document.getElementById("person");
    const taskListUl = document.getElementById("task-list");
    const doneListUl = document.getElementById("done-list");
    const addButton = document.getElementById("add-btn");

    addButton.addEventListener("click", createTask);

    function createTask() {
        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;
        clearInputs();

        if (!place || !action || !person) {
            return;
        }

        const taskLiElement = createTaskHTML(place, action, person);
        taskListUl.appendChild(taskLiElement);
    }

    function createTaskHTML(place, action, person) {
        const placePar = document.createElement("p");
        placePar.textContent = `Place:${place}`;
        const actionPar = document.createElement("p");
        actionPar.textContent = `Action:${action}`;
        const personPar = document.createElement("p");
        personPar.textContent = `Person:${person}`;
        const article = document.createElement("article");
        article.appendChild(placePar);
        article.appendChild(actionPar);
        article.appendChild(personPar);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done");
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);

        const liItem = document.createElement("li");
        liItem.classList.add("clean-task");
        liItem.appendChild(article);
        liItem.appendChild(buttonsDiv);

        editButton.addEventListener("click", () => {
            placeInput.value = place;
            actionInput.value = action;
            personInput.value = person;

            liItem.remove();
        });

        doneButton.addEventListener("click", () => {
            buttonsDiv.remove();

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.addEventListener("click", deleteTask);

            liItem.appendChild(deleteButton);
            doneListUl.appendChild(liItem);
        });

        return liItem;
    }

    function deleteTask(e) {
        const listItem = e.currentTarget.parentElement;
        listItem.remove();
    }

    function clearInputs() {
        placeInput.value = "";
        actionInput.value = "";
        personInput.value = "";
    }
}