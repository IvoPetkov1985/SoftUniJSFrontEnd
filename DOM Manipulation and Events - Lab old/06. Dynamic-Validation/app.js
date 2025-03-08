function validate() {
    const inputElement = document.getElementById("email");
    const regexPattern = /[a-z]+@[a-z]+\.[a-z]+/;

    inputElement.addEventListener("change", () => {
        if (!regexPattern.test(inputElement.value)) {
            inputElement.classList.add("error");
        } else {
            inputElement.classList.remove("error");
        }
    });
}