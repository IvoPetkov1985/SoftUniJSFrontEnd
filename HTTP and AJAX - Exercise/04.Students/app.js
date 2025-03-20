function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/collections/students";

    const tbodyElement = document.querySelector("#results tbody");
    const submitBtnElement = document.querySelector("#submit");
    submitBtnElement.addEventListener("click", createStudentEntry);

    async function loadAllStudents() {
        tbodyElement.innerHTML = "";
        const request = await fetch(baseURL);
        const requestAsJson = await request.json();
        const studentObjects = Object.values(requestAsJson);

        studentObjects.forEach(obj => {
            const trElement = document.createElement("tr");

            const fNameTdElement = document.createElement("td");
            fNameTdElement.textContent = obj.firstName;

            const lNameTdElement = document.createElement("td");
            lNameTdElement.textContent = obj.lastName;

            const fNumberTdElement = document.createElement("td");
            fNumberTdElement.textContent = obj.facultyNumber;

            const gradeTdElement = document.createElement("td");
            gradeTdElement.textContent = obj.grade;

            trElement.append(fNameTdElement, lNameTdElement, fNumberTdElement, gradeTdElement);
            tbodyElement.appendChild(trElement);
        });
    }

    async function createStudentEntry(e) {
        e.preventDefault();
        const [fNameInput, lNameInput, facNumberInput, gradeInput] = document
            .querySelectorAll("#form .inputs input");

        const studentFirstName = fNameInput.value;
        const studentLastName = lNameInput.value;
        const studentFacNumber = facNumberInput.value;
        const studentGrade = gradeInput.value;

        if (!studentFirstName || !studentLastName || !studentFacNumber || !studentGrade) {
            return;
        }

        const studentObject = {
            firstName: studentFirstName,
            lastName: studentLastName,
            facultyNumber: studentFacNumber,
            grade: studentGrade
        };

        await fetch(baseURL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(studentObject)
        });

        fNameInput.value = "";
        lNameInput.value = "";
        facNumberInput.value = "";
        gradeInput.value = "";

        loadAllStudents();
    }

    loadAllStudents();
}

attachEvents();