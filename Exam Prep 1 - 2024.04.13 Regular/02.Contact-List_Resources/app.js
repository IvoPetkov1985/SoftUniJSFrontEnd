window.addEventListener("load", solve);

function solve() {
    const addContactButton = document.getElementById("add-btn");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const categoryInput = document.getElementById("category");
    const checkListUl = document.getElementById("check-list");
    const contactListUl = document.getElementById("contact-list");

    addContactButton.addEventListener("click", () => {
        const name = nameInput.value;
        const phone = phoneInput.value;
        const category = categoryInput.value;

        const isValid = name !== "" && phone !== "" && category !== "";

        if (!isValid) {
            return;
        }

        const liElement = createCheckListElement(name, phone, category);
        checkListUl.appendChild(liElement);
        resetInputs();
    });

    function resetInputs() {
        nameInput.value = "";
        phoneInput.value = "";
        categoryInput.value = "";
    }

    function createCheckListElement(name, phone, category) {
        const pName = document.createElement("p");
        pName.textContent = `name:${name}`;

        const pPhone = document.createElement("p");
        pPhone.textContent = `phone:${phone}`;

        const pCategory = document.createElement("p");
        pCategory.textContent = `category:${category}`;

        const articleElement = document.createElement("article");
        articleElement.appendChild(pName);
        articleElement.appendChild(pPhone);
        articleElement.appendChild(pCategory);

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");

        const saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");

        const divButtons = document.createElement("div");
        divButtons.classList.add("buttons");
        divButtons.appendChild(editButton);
        divButtons.appendChild(saveButton);

        const liElement = document.createElement("li");
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        editButton.addEventListener("click", () => {
            nameInput.value = name;
            phoneInput.value = phone;
            categoryInput.value = category;

            liElement.remove();
        });

        saveButton.addEventListener("click", () => {
            divButtons.remove();

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("del-btn");
            deleteButton.addEventListener("click", deleteContact);

            liElement.appendChild(deleteButton);

            contactListUl.appendChild(liElement);
        });

        return liElement;
    }

    function deleteContact(e) {
        e.currentTarget.parentElement.remove();
    }
}