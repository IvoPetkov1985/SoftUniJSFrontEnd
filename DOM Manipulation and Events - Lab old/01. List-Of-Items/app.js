function addItem() {
    const listElement = document.getElementsByTagName("ul")[0];
    const inputElement = document.getElementById("newItemText");
    const inputText = inputElement.value;

    const liElement = document.createElement("li");

    if (!inputText) {
        return;
    }

    liElement.textContent = inputText;

    listElement.appendChild(liElement);
    inputElement.value = "";
}