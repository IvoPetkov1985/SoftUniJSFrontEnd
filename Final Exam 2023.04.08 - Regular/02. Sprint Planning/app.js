window.addEventListener('load', solve);

function solve() {
    const titleInput = document.getElementById("title");
    const descriptionTextarea = document.getElementById("description");
    const labelSelect = document.getElementById("label");
    const pointsInput = document.getElementById("points");
    const assigneeInput = document.getElementById("assignee");
    const taskIdInput = document.createElement("task-id");

    const createTaskButton = document.getElementById("create-task-btn");
    const deleteTaskButton = document.getElementById("delete-task-btn");

    const tasksSection = document.getElementById("tasks-section");

    createTaskButton.addEventListener("click", createTask);
    deleteTaskButton.addEventListener("click", deletePermanently);

    let counter = 1;
    let totalPoints = 0;
    const totalPointsPar = document.getElementById("total-sprint-points");

    function createTask() {
        const title = titleInput.value;
        const description = descriptionTextarea.value;
        const label = labelSelect.value;
        const points = pointsInput.value;
        const assignee = assigneeInput.value;

        if (!title || !description || !label || !points || !assignee) {
            return;
        }

        clearInputFields();
        tasksSection.appendChild(createTaskArticle(title, description, label, points, assignee))
    }

    function createTaskArticle(title, description, label, points, assignee) {
        const labelDiv = document.createElement("div");
        let additionalClass = "";

        switch (label) {
            case "Feature": additionalClass = "feature"; break;
            case "Low Priority Bug": additionalClass = "low-priority"; break;
            case "High Priority Bug": additionalClass = "high-priority"; break;
        }

        labelDiv.classList.add("task-card-label", additionalClass);
        let icon = "";

        switch (label) {
            case "Feature": icon = "&#8865"; break;
            case "Low Priority Bug": icon = "&#9737"; break;
            case "High Priority Bug": icon = "&#9888"; break;
        }

        labelDiv.innerHTML = `${label} ${icon}`;

        const titleH3 = document.createElement("h3");
        titleH3.classList.add("task-card-title");
        titleH3.textContent = title;

        const descriptionPar = document.createElement("p");
        descriptionPar.classList.add("task-card-description");
        descriptionPar.textContent = description;

        const pointsDiv = document.createElement("div");
        pointsDiv.classList.add("task-card-points");
        pointsDiv.textContent = `Estimated at ${points} pts`;
        totalPoints += Number(points);
        totalPointsPar.textContent = `Total Points ${totalPoints}pts`;

        const assigneeDiv = document.createElement("div");
        assigneeDiv.classList.add("task-card-assignee");
        assigneeDiv.textContent = `Assigned to: ${assignee}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteConfirm);
        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("task-card-actions");
        actionsDiv.appendChild(deleteButton);

        const articleEl = document.createElement("article");
        const articleId = `task-${counter}`;
        articleEl.id = articleId;
        articleEl.classList.add("task-card");

        articleEl.appendChild(labelDiv);
        articleEl.appendChild(titleH3);
        articleEl.appendChild(descriptionPar);
        articleEl.appendChild(pointsDiv);
        articleEl.appendChild(assigneeDiv);
        articleEl.appendChild(actionsDiv);

        counter++;

        function deleteConfirm() {
            taskIdInput.value = articleId;
            titleInput.value = title;
            descriptionTextarea.value = description;
            labelSelect.value = label;
            pointsInput.value = points;
            assigneeInput.value = assignee;

            deleteTaskButton.removeAttribute("disabled");
            createTaskButton.setAttribute("disabled", "disabled");

            taskIdInput.setAttribute("disabled", "disabled");
            titleInput.setAttribute("disabled", "disabled");
            descriptionTextarea.setAttribute("disabled", "disabled");
            labelSelect.setAttribute("disabled", "disabled");
            pointsInput.setAttribute("disabled", "disabled");
            assigneeInput.setAttribute("disabled", "disabled");
        }

        return articleEl;
    }

    function deletePermanently() {
        const articleId = taskIdInput.value;
        const articleToDelete = document.getElementById(articleId);
        const pointsToSubtract = Number(pointsInput.value);
        totalPoints -= pointsToSubtract;
        totalPointsPar.textContent = `Total Points ${totalPoints}pts`;
        articleToDelete.remove();
        taskIdInput.value = "";
        clearInputFields();
        createTaskButton.removeAttribute("disabled");
        deleteTaskButton.setAttribute("disabled", "disabled");
        taskIdInput.removeAttribute("disabled");
        titleInput.removeAttribute("disabled");
        descriptionTextarea.removeAttribute("disabled");
        labelSelect.removeAttribute("disabled");
        pointsInput.removeAttribute("disabled");
        assigneeInput.removeAttribute("disabled");
    }

    function clearInputFields() {
        titleInput.value = "";
        descriptionTextarea.value = "";
        labelSelect.value = "";
        pointsInput.value = "";
        assigneeInput.value = "";
    }
}