window.addEventListener("load", solve);

function solve() {
    const checkListUl = document.getElementById("check-list");
    const laptopListUl = document.getElementById("laptops-list");
    const modelInput = document.getElementById("laptop-model");
    const storageInput = document.getElementById("storage");
    const priceInput = document.getElementById("price");
    const addButton = document.getElementById("add-btn");
    const clearButton = document.querySelector(".btn.clear");

    addButton.addEventListener("click", addLaptop);

    clearButton.addEventListener("click", () => {
        laptopListUl.innerHTML = "";
    });

    function addLaptop() {
        const model = modelInput.value;
        const storage = storageInput.value;
        const price = priceInput.value;

        if (!model || !storage || !price) {
            return;
        }

        clearInputs();
        const liItem = createLiItemHTML(model, storage, price);
        checkListUl.appendChild(liItem);
        addButton.setAttribute("disabled", "disabled");
    }

    function createLiItemHTML(model, storage, price) {
        const modelPar = document.createElement("p");
        modelPar.textContent = model;
        const storagePar = document.createElement("p");
        storagePar.textContent = `Memory: ${storage} TB`;
        const pricePar = document.createElement("p");
        pricePar.textContent = `Price: ${price}$`;
        const articleEl = document.createElement("article");
        articleEl.appendChild(modelPar);
        articleEl.appendChild(storagePar);
        articleEl.appendChild(pricePar);

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "edit");
        editButton.textContent = "edit";
        const okButton = document.createElement("button");
        okButton.classList.add("btn", "ok");
        okButton.textContent = "ok";

        const liElement = document.createElement("li");
        liElement.classList.add("laptop-item");
        liElement.appendChild(articleEl);
        liElement.appendChild(editButton);
        liElement.appendChild(okButton);

        editButton.addEventListener("click", () => {
            modelInput.value = model;
            storageInput.value = storage;
            priceInput.value = price;

            addButton.removeAttribute("disabled");
            liElement.remove();
        });

        okButton.addEventListener("click", () => {
            liElement.removeChild(editButton);
            liElement.removeChild(okButton);
            laptopListUl.appendChild(liElement);
            addButton.removeAttribute("disabled");
        });

        return liElement;
    }

    function clearInputs() {
        modelInput.value = "";
        storageInput.value = "";
        priceInput.value = "";
    }
}