document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputFieldElements = document.querySelectorAll("input[type=text]");

    for (const inputEl of inputFieldElements) {
        inputEl.addEventListener("focus", () => {
            inputEl.parentElement.classList.add("focused");
        });

        inputEl.addEventListener("blur", () => {
            inputEl.parentElement.classList.remove("focused");
        });
    }
}