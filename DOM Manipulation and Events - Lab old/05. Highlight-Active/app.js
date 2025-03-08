function focused() {
    const inputElements = document.querySelectorAll("input[type=text]");

    inputElements.forEach(el => {
        const selectedDivElement = el.parentNode;

        el.addEventListener("focus", () => {
            selectedDivElement.classList.add("focused");
        });

        el.addEventListener("blur", () => {
            selectedDivElement.classList.remove("focused");
        });
    });
}