function addItem() {
    const ulListElement = document.getElementById("items");
    const inputElement = document.getElementById("newItemText");
    const inputText = inputElement.value;

    const newItemElement = document.createElement("li");
    newItemElement.textContent = inputText;

    const newAnchorElement = document.createElement("a");
    newAnchorElement.setAttribute("href", "#");
    newAnchorElement.textContent = "[Delete]";

    newAnchorElement.addEventListener("click", (event) => {
        event.currentTarget.parentElement.remove();
    });

    newItemElement.appendChild(newAnchorElement);
    ulListElement.appendChild(newItemElement);
    inputElement.value = "";
}