const baseURL = "http://localhost:3030/jsonstore/orders";

const ordersListDiv = document.getElementById("list");
const loadAllOrdersButton = document.getElementById("load-orders");
const createOrderButton = document.getElementById("order-btn");
const editOrderButton = document.getElementById("edit-order");

const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const quantityInput = document.getElementById("quantity");

loadAllOrdersButton.addEventListener("click", loadAllOrders);
createOrderButton.addEventListener("click", createOrder);
editOrderButton.addEventListener("click", editExistingOrder);

async function createOrder() {
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    clearInputs();
    const orderObject = { name, quantity, date };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(orderObject)
    });

    if (!response.ok) {
        return;
    }

    await loadAllOrders();
}

async function editExistingOrder() {
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    clearInputs();
    const orderId = editOrderButton.getAttribute("data-order-id");
    const editOrderObject = { name, quantity, date, _id: orderId };

    const response = await fetch(`${baseURL}/${orderId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editOrderObject)
    });

    if (!response.ok) {
        return;
    }

    editOrderButton.removeAttribute("data-order-id");
    await loadAllOrders();
    editOrderButton.setAttribute("disabled", "disabled");
    createOrderButton.removeAttribute("disabled");
}

async function loadAllOrders() {
    ordersListDiv.innerHTML = "";
    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const ordersObjects = Object.values(responseAsJson);

    for (const orderObj of ordersObjects) {
        ordersListDiv.appendChild(createOrderDiv(orderObj));
    }
}

function createOrderDiv(order) {
    const nameH2 = document.createElement("h2");
    nameH2.textContent = order.name;
    const dateH3 = document.createElement("h3");
    dateH3.textContent = order.date;
    const quantityH3 = document.createElement("h3");
    quantityH3.textContent = order.quantity;
    const changeButton = document.createElement("button");
    changeButton.textContent = "Change";
    changeButton.className = "change-btn";
    changeButton.addEventListener("click", sendOrderToChange);
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "done-btn";
    doneButton.addEventListener("click", deleteOrder);

    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    containerDiv.appendChild(nameH2);
    containerDiv.appendChild(dateH3);
    containerDiv.appendChild(quantityH3);
    containerDiv.appendChild(changeButton);
    containerDiv.appendChild(doneButton);

    function sendOrderToChange() {
        nameInput.value = order.name;
        quantityInput.value = order.quantity;
        dateInput.value = order.date;

        containerDiv.remove();
        editOrderButton.removeAttribute("disabled");
        createOrderButton.setAttribute("disabled", "disabled");
        editOrderButton.setAttribute("data-order-id", order._id);
    }

    async function deleteOrder() {
        await fetch(`${baseURL}/${order._id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        await loadAllOrders();
    }

    return containerDiv;
}

function clearInputs() {
    nameInput.value = "";
    quantityInput.value = "";
    dateInput.value = "";
}