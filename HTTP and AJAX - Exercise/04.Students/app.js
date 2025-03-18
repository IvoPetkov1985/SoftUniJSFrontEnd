function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/collections/students";

    const tableBody = document.querySelector("#results tbody");
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", addNewStudent);

    async function loadStudents() {
        tableBody.innerHTML = "";

        const studentsRequest = await fetch(baseURL);
        const studentsObjs = await studentsRequest.json();
        const arrayOfStudents = Object.values(studentsObjs);

        for (const studentObj of arrayOfStudents) {
            const fNameTd = document.createElement("td");
            fNameTd.textContent = studentObj.firstName;
            const lNameTd = document.createElement("td");
            lNameTd.textContent = studentObj.lastName;
            const fNumberTd = document.createElement("td");
            fNumberTd.textContent = studentObj.facultyNumber;
            const gradeTd = document.createElement("td");
            gradeTd.textContent = studentObj.grade;

            const rowEl = document.createElement("tr");
            rowEl.appendChild(fNameTd);
            rowEl.appendChild(lNameTd);
            rowEl.appendChild(fNumberTd);
            rowEl.appendChild(gradeTd);

            tableBody.appendChild(rowEl);
        }
    }

    loadStudents();

    async function addNewStudent(event) {
        event.preventDefault();

        const fNameInput = document.getElementsByName("firstName")[0];
        const lNameInput = document.getElementsByName("lastName")[0];
        const fNumberInput = document.getElementsByName("facultyNumber")[0];
        const gradeInput = document.getElementsByName("grade")[0];

        const firstName = fNameInput.value;
        const lastName = lNameInput.value;
        const facNumber = fNumberInput.value;
        const grade = gradeInput.value;

        if (!firstName || !lastName || !facNumber || !grade) {
            return;
        }

        const newStudentObj = {
            firstName,
            lastName,
            facultyNumber: facNumber,
            grade
        };

        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(newStudentObj),
        });

        fNameInput.value = "";
        lNameInput.value = "";
        fNumberInput.value = "";
        gradeInput.value = "";

        loadStudents();
    }
}

attachEvents();