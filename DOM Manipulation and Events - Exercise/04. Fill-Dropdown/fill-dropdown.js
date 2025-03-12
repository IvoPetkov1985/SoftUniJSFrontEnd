document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const selectMenu = document.getElementById("menu");
    const formElement = document.querySelector("form");

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

        const textInput = e.currentTarget.querySelector("#newItemText");
        const valueInput = e.currentTarget.querySelector("#newItemValue");
        const text = textInput.value;
        const vl = valueInput.value;

        if (text === "" || vl === "") {
            return;
        }

        const optionElement = document.createElement("option");
        optionElement.textContent = text;
        optionElement.value = vl;
        selectMenu.append(optionElement);

        textInput.value = "";
        valueInput.value = "";
        textInput.focus();
    });
}