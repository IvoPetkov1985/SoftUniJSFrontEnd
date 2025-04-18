const baseURL = "http://localhost:3030/jsonstore/tasks";
const courseListDiv = document.getElementById("list");

const titleInput = document.getElementById("course-name");
const typeInput = document.getElementById("course-type");
const descriptionTextarea = document.getElementById("description");
const teacherInput = document.getElementById("teacher-name");

const addCourseButton = document.getElementById("add-course");
const editCourseButton = document.getElementById("edit-course");
const loadCoursesButton = document.getElementById("load-course");

loadCoursesButton.addEventListener("click", loadCourses);
addCourseButton.addEventListener("click", addCourse);
editCourseButton.addEventListener("click", editExistingCourse);

loadCourses();
clearInputs();

async function addCourse() {
    const title = titleInput.value;
    const type = typeInput.value;
    const description = descriptionTextarea.value;
    const teacher = teacherInput.value;

    if (!title || !type || !description || !teacher) {
        return;
    }

    clearInputs();
    const courseObject = { title, type, description, teacher };

    const request = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(courseObject)
    });

    if (!request.ok) {
        return;
    }

    await loadCourses();
}

async function editExistingCourse() {
    const title = titleInput.value;
    const type = typeInput.value;
    const description = descriptionTextarea.value;
    const teacher = teacherInput.value;

    if (!title || !type || !description || !teacher) {
        return;
    }

    clearInputs();
    const courseId = editCourseButton.getAttribute("data-course-id");
    const editCourseObject = { title, type, description, teacher, _id: courseId };

    const request = await fetch(`${baseURL}/${courseId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editCourseObject)
    });

    await loadCourses();
    editCourseButton.removeAttribute("data-course-id");
    editCourseButton.setAttribute("disabled", "disabled");
    addCourseButton.removeAttribute("disabled");
}

async function loadCourses() {
    courseListDiv.innerHTML = "";
    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const coursesObjects = Object.values(responseAsJson);
    const fragment = document.createDocumentFragment();

    coursesObjects.forEach(course => {
        fragment.appendChild(createCourseHTML(course));
    });

    courseListDiv.appendChild(fragment);
    editCourseButton.setAttribute("disabled", "disabled");
}

function createCourseHTML({ title, type, description, teacher, _id }) {
    const titleH2 = document.createElement("h2");
    titleH2.textContent = title;
    const teacherH3 = document.createElement("h3");
    teacherH3.textContent = teacher;
    const typeH3 = document.createElement("h3");
    typeH3.textContent = type;
    const descriptionH4 = document.createElement("h4");
    descriptionH4.textContent = description;
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Course";
    editButton.addEventListener("click", editCourse);
    const finishButton = document.createElement("button");
    finishButton.classList.add("finish-btn");
    finishButton.textContent = "Finish Course";
    finishButton.addEventListener("click", finishCourse);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(titleH2);
    containerDiv.appendChild(teacherH3);
    containerDiv.appendChild(typeH3);
    containerDiv.appendChild(descriptionH4);
    containerDiv.appendChild(editButton);
    containerDiv.appendChild(finishButton);

    function editCourse() {
        titleInput.value = title;
        typeInput.value = type;
        descriptionTextarea.value = description;
        teacherInput.value = teacher;
        containerDiv.remove();
        editCourseButton.setAttribute("data-course-id", _id);
        editCourseButton.removeAttribute("disabled");
        addCourseButton.setAttribute("disabled", "disabled");
    }

    async function finishCourse() {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        containerDiv.remove();
        await loadCourses();
    }

    return containerDiv;
}

function clearInputs() {
    titleInput.value = "";
    typeInput.value = "";
    descriptionTextarea.value = "";
    teacherInput.value = "";
}