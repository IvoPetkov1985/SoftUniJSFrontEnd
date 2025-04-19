// TODO:
function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/tasks";

    const loadBoardButton = document.getElementById("load-board-btn");
    const createTaskButton = document.getElementById("create-task-btn");

    const titleInput = document.getElementById("title");
    const descriptionTextarea = document.getElementById("description");

    const todoSectionUl = document.querySelector("#todo-section ul");
    const inProgressSectionUl = document.querySelector("#in-progress-section ul");
    const codeReviewSectionUl = document.querySelector("#code-review-section ul");
    const doneSectionUl = document.querySelector("#done-section ul");

    loadBoardButton.addEventListener("click", loadTasks);
    createTaskButton.addEventListener("click", createNewTask);

    async function createNewTask() {
        const title = titleInput.value;
        const description = descriptionTextarea.value;

        if (!title || !description) {
            return;
        }

        clearInputs();
        const status = "ToDo";
        const newTaskObject = { title, description, status };

        const response = await fetch(baseURL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTaskObject)
        });

        if (!response.ok) {
            return;
        }

        await loadTasks();
    }

    async function loadTasks() {
        todoSectionUl.innerHTML = "";
        inProgressSectionUl.innerHTML = "";
        codeReviewSectionUl.innerHTML = "";
        doneSectionUl.innerHTML = "";

        const response = await fetch(baseURL);
        const responseAsJson = await response.json();
        const tasksObjects = Object.values(responseAsJson);
        tasksObjects.forEach(task => {
            const currentTask = createTaskHTML(task);

            if (task.status === "ToDo") {
                todoSectionUl.appendChild(currentTask);
            } else if (task.status === "In Progress") {
                inProgressSectionUl.appendChild(currentTask);
            } else if (task.status === "Code Review") {
                codeReviewSectionUl.appendChild(currentTask);
            } else if (task.status === "Done") {
                doneSectionUl.appendChild(currentTask);
            }
        });
    }

    function createTaskHTML({ title, description, status, _id }) {
        const titleH3 = document.createElement("h3");
        titleH3.textContent = title;
        const descriptionPar = document.createElement("p");
        descriptionPar.textContent = description;
        const moveButton = document.createElement("button");
        let buttonContent = "";

        if (status === "ToDo") {
            buttonContent = "Move to In Progress";
        } else if (status === "In Progress") {
            buttonContent = "Move to Code Review";
        } else if (status === "Code Review") {
            buttonContent = "Move to Done";
        } else if (status === "Done") {
            buttonContent = "Close";
        }

        moveButton.textContent = buttonContent;
        moveButton.addEventListener("click", moveExistingTask);

        const taskLiElement = document.createElement("li");
        taskLiElement.classList.add("task");
        taskLiElement.appendChild(titleH3);
        taskLiElement.appendChild(descriptionPar);
        taskLiElement.appendChild(moveButton);

        async function moveExistingTask() {
            if (status !== "Done") {
                let newStatus = "";

                if (status === "ToDo") {
                    newStatus = "In Progress";
                } else if (status === "In Progress") {
                    newStatus = "Code Review";
                } else if (status === "Code Review") {
                    newStatus = "Done";
                }

                const patchObj = { status: newStatus, _id };

                const response = await fetch(`${baseURL}/${_id}`, {
                    method: "PATCH",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(patchObj)
                });

                if (!response.ok) {
                    return;
                }
            } else {
                await fetch(`${baseURL}/${_id}`, {
                    method: "DELETE",
                    headers: { "Content-type": "application/json" },
                });
            }

            await loadTasks();
        }

        return taskLiElement;
    }

    function clearInputs() {
        titleInput.value = "";
        descriptionTextarea.value = "";
    }
}

attachEvents();