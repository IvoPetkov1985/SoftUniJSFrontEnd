const baseURL = "http://localhost:3030/jsonstore/orders";

const loadOrdersButton = document.getElementById("load-orders");
const addOrderButton = document.getElementById("order-btn");
const editOrderButton = document.getElementById("edit-order");
const ordersListDiv = document.getElementById("list");
const nameInput = document.getElementById("name");
const quantityInput = document.getElementById("quantity");
const dateInput = document.getElementById("date");

loadOrdersButton.addEventListener("click", loadAllOrders);
addOrderButton.addEventListener("click", addOrderToList);
editOrderButton.addEventListener("click", editOrderFromList);

async function addOrderToList() {
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    clearInputs();
    const newOrderObj = { name, quantity, date };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newOrderObj)
    });

    if (!response.ok) {
        return;
    }

    await loadAllOrders();
}

async function editOrderFromList() {
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    clearInputs();
    const orderId = editOrderButton.getAttribute("data-order-id");
    const editOrderObj = { name, quantity, date, _id: orderId };

    const response = await fetch(`${baseURL}/${orderId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editOrderObj)
    });

    if (!response.ok) {
        return;
    }

    await loadAllOrders();
    editOrderButton.removeAttribute("data-order-id");
    editOrderButton.setAttribute("disabled", "disabled");
    addOrderButton.removeAttribute("disabled");
}

async function loadAllOrders() {
    ordersListDiv.innerHTML = "";

    try {
        const response = await fetch(baseURL);
        const jsonResponse = await response.json();
        const ordersArray = Object.values(jsonResponse);
        const fragment = document.createDocumentFragment();

        ordersArray.forEach(order => {
            fragment.appendChild(createOrderHTML(order));
        });

        ordersListDiv.appendChild(fragment);
    } catch (error) {
        console.log(error.message);
    }
}

function createOrderHTML(order) {
    const nameH2 = document.createElement("h2");
    nameH2.textContent = order.name;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = order.date;
    const quantityH3 = document.createElement("h3");
    quantityH3.textContent = order.quantity;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(nameH2);
    containerDiv.appendChild(dateH3);
    containerDiv.appendChild(quantityH3);
    containerDiv.appendChild(changeButton);
    containerDiv.appendChild(doneButton);

    changeButton.addEventListener("click", () => {
        nameInput.value = order.name;
        quantityInput.value = order.quantity;
        dateInput.value = order.date;

        containerDiv.remove();
        editOrderButton.setAttribute("data-order-id", order._id);
        editOrderButton.removeAttribute("disabled");
        addOrderButton.setAttribute("disabled", "disabled");
    });

    doneButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${order._id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        await loadAllOrders();
    });

    return containerDiv;
}

function clearInputs() {
    nameInput.value = "";
    quantityInput.value = "";
    dateInput.value = "";
}