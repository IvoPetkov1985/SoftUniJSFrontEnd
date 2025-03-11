document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const contentDiv = document.getElementById("content");
    const formElement = document.getElementById("task-input");

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputField = e.currentTarget.querySelector("input[type=text]");
        const inputText = inputField.value;
        const wordsArray = inputText.split(", ");

        wordsArray.forEach(word => {
            const parEl = document.createElement("p");
            parEl.textContent = word;
            parEl.style.display = "none";
            const divEl = document.createElement("div");
            divEl.append(parEl);

            divEl.addEventListener("click", (e) => {
                e.currentTarget.querySelector("p").style.display = "block";
            });

            contentDiv.append(divEl);
        });
    });
}