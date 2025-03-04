function addItem() {
    const itemsListElement = document.getElementById("items");
    const inputFieldElement = document.getElementById("newItemText");

    const inputText = inputFieldElement.value;

    if (!inputText) {
        return;
    }

    const liElement = document.createElement("li");
    liElement.textContent = inputText;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    // linkElement.textContent = "[Delete]";
    const linkText = document.createTextNode("[Delete]");
    linkElement.appendChild(linkText);

    liElement.addEventListener("click", removeLiElement);
    liElement.appendChild(linkElement);

    itemsListElement.appendChild(liElement);
    inputFieldElement.value = "";

    function removeLiElement() {
        liElement.remove();
    }
}