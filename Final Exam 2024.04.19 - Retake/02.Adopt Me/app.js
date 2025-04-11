window.addEventListener("load", solve);

function solve() {
    const adoptButton = document.getElementById("adopt-btn");
    const typeInput = document.getElementById("type");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const adoptionInfoUl = document.getElementById("adoption-info");
    const adoptedListUl = document.getElementById("adopted-list");

    adoptButton.addEventListener("click", (e) => {
        e.preventDefault();
        const type = typeInput.value;
        const age = ageInput.value;
        const gender = genderSelect.value;

        if (!type || !age || !gender) {
            return;
        }

        clearInputs();
        const petLi = createPetHTML(type, age, gender);
        adoptionInfoUl.appendChild(petLi);
    });

    function createPetHTML(type, age, gender) {
        const typePar = document.createElement("p");
        typePar.textContent = `Pet:${type}`;
        const genderPar = document.createElement("p");
        genderPar.textContent = `Gender:${gender}`;
        const agePar = document.createElement("p");
        agePar.textContent = `Age:${age}`;
        const articleEl = document.createElement("article");
        articleEl.appendChild(typePar);
        articleEl.appendChild(genderPar);
        articleEl.appendChild(agePar);

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        const doneButton = document.createElement("button");
        doneButton.classList.add("done-btn");
        doneButton.textContent = "Done";
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);

        const petLiElement = document.createElement("li");
        petLiElement.appendChild(articleEl);
        petLiElement.appendChild(buttonsDiv);

        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            typeInput.value = type;
            ageInput.value = age;
            genderSelect.value = gender;

            petLiElement.remove();
        });

        doneButton.addEventListener("click", (e) => {
            e.preventDefault();
            petLiElement.removeChild(buttonsDiv);
            const clearButton = document.createElement("button");
            clearButton.classList.add("clear-btn");
            clearButton.textContent = "Clear";
            petLiElement.appendChild(clearButton);
            adoptedListUl.appendChild(petLiElement);

            clearButton.addEventListener("click", deletePetLi);
        });

        return petLiElement;
    }

    function deletePetLi(e) {
        e.preventDefault();
        const liElement = e.currentTarget.parentElement;
        liElement.remove();
    }

    function clearInputs() {
        typeInput.value = "";
        ageInput.value = "";
        genderSelect.value = "";
    }
}