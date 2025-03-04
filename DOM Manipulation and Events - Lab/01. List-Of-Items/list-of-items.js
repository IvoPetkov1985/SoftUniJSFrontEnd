function addItem() {
    const inputFieldElement = document.getElementById("newItemText");
    const listItemsElement = document.getElementById("items");

    const inputText = inputFieldElement.value;

    const createdLiElement = document.createElement("li");
    createdLiElement.textContent = inputText;

    listItemsElement.appendChild(createdLiElement);
    inputFieldElement.value = "";
}