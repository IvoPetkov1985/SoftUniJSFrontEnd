document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputFieldElement = document.getElementById("email");
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    inputFieldElement.addEventListener("change", (e) => {
        if (!pattern.test(e.currentTarget.value)) {
            return e.currentTarget.classList.add("error");
        }

        e.currentTarget.classList.remove("error");
    });
}