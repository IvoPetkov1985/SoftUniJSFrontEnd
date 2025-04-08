const baseURL = "http://localhost:3030/jsonstore/gifts";

const loadPresentsButton = document.getElementById("load-presents");
const addPresentButton = document.getElementById("add-present");
const editPresentButton = document.getElementById("edit-present");
const giftListDiv = document.getElementById("gift-list");
const formDiv = document.getElementById("form");

const giftInput = document.getElementById("gift");
const forInput = document.getElementById("for");
const priceInput = document.getElementById("price");

addPresentButton.addEventListener("click", addPresent);
editPresentButton.addEventListener("click", editPresent);
loadPresentsButton.addEventListener("click", loadPresents);

async function addPresent() {
    const gift = giftInput.value;
    const giftFor = forInput.value;
    const price = priceInput.value;

    if (!gift || !giftFor || !price) {
        return;
    }

    clearInputs();
    const giftObj = { gift, for: giftFor, price };

    await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(giftObj)
    });

    await loadPresents();
}

async function editPresent() {
    const gift = giftInput.value;
    const giftFor = forInput.value;
    const price = priceInput.value;

    if (!gift || !giftFor || !price) {
        return;
    }

    const giftId = formDiv.getAttribute("data-present-id");
    const editGiftObj = { gift, for: giftFor, price, _id: giftId };
    clearInputs();

    await fetch(`${baseURL}/${giftId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editGiftObj)
    });

    await loadPresents();

    formDiv.removeAttribute("data-present-id");
    editPresentButton.setAttribute("disabled", "disabled");
    addPresentButton.removeAttribute("disabled");
}

async function loadPresents() {
    giftListDiv.innerHTML = "";
    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const presentsObjs = Object.values(responseAsJson);

    presentsObjs.forEach(present => {
        giftListDiv.appendChild(createPresentHTML(present));
    });
}

function createPresentHTML(present) {
    const giftPar = document.createElement("p");
    giftPar.textContent = present.gift;
    const forPar = document.createElement("p");
    forPar.textContent = present.for;
    const pricePar = document.createElement("p");
    pricePar.textContent = present.price;
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.appendChild(giftPar);
    contentDiv.appendChild(forPar);
    contentDiv.appendChild(pricePar);

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-container");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const giftSockDiv = document.createElement("div");
    giftSockDiv.classList.add("gift-sock");
    giftSockDiv.appendChild(contentDiv);
    giftSockDiv.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        giftInput.value = present.gift;
        forInput.value = present.for;
        priceInput.value = present.price;

        giftSockDiv.remove();

        formDiv.setAttribute("data-present-id", present._id);
        editPresentButton.removeAttribute("disabled");
        addPresentButton.setAttribute("disabled", "disabled");
    });

    deleteButton.addEventListener("click", async () => {
        const deleteURL = `${baseURL}/${present._id}`;

        await fetch(deleteURL, {
            method: "DELETE"
        });

        giftSockDiv.remove();
        await loadPresents();
    });

    return giftSockDiv;
}

function clearInputs() {
    giftInput.value = "";
    forInput.value = "";
    priceInput.value = "";
}