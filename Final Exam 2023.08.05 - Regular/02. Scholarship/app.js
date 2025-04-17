window.addEventListener("load", solve);

function solve() {
    const studentNameInput = document.getElementById("student");
    const universityInput = document.getElementById("university");
    const scoreInput = document.getElementById("score");
    const previewListUl = document.getElementById("preview-list");
    const candidatesListUl = document.getElementById("candidates-list");
    const nextButton = document.getElementById("next-btn");

    nextButton.addEventListener("click", addStudentInfoToPreviewList);

    function addStudentInfoToPreviewList() {
        const studentName = studentNameInput.value;
        const university = universityInput.value;
        const score = scoreInput.value;

        if (!studentName || !university || !score) {
            return;
        }

        clearInputFields();
        nextButton.setAttribute("disabled", "disabled");
        previewListUl.appendChild(createStudentInfo(studentName, university, score));
    }

    function createStudentInfo(name, university, score) {
        const nameH4 = document.createElement("h4");
        nameH4.textContent = name;
        const universityPar = document.createElement("p");
        universityPar.textContent = `University: ${university}`;
        const scorePar = document.createElement("p");
        scorePar.textContent = `Score: ${score}`;
        const article = document.createElement("article");
        article.appendChild(nameH4);
        article.appendChild(universityPar);
        article.appendChild(scorePar);

        const editButton = document.createElement("button");
        editButton.classList.add("action-btn", "edit");
        editButton.textContent = "edit";
        editButton.addEventListener("click", editStudentInfo);
        const applyButton = document.createElement("button");
        applyButton.classList.add("action-btn", "apply");
        applyButton.textContent = "apply";
        applyButton.addEventListener("click", applyForScholarchip);

        const studentLi = document.createElement("li");
        studentLi.classList.add("application");
        studentLi.appendChild(article);
        studentLi.appendChild(editButton);
        studentLi.appendChild(applyButton);

        function editStudentInfo() {
            studentNameInput.value = name;
            universityInput.value = university;
            scoreInput.value = score;
            studentLi.remove();
            activateNextButton();
        }

        function applyForScholarchip() {
            candidatesListUl.appendChild(studentLi);
            studentLi.removeChild(editButton);
            studentLi.removeChild(applyButton);
            activateNextButton();
        }

        function activateNextButton() {
            nextButton.removeAttribute("disabled");
        }

        return studentLi;
    }

    function clearInputFields() {
        studentNameInput.value = "";
        universityInput.value = "";
        scoreInput.value = "";
    }
}