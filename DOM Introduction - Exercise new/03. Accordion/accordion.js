function toggle() {
    const buttonElement = document.getElementsByClassName("button")[0];
    const extraTextElement = document.getElementById("extra");

    const buttonElementText = buttonElement.textContent;

    switch (buttonElementText) {
        case "More":
            buttonElement.textContent = "Less";
            extraTextElement.style.display = "block";
            break;
        case "Less":
            buttonElement.textContent = "More";
            extraTextElement.style.display = "none";
            break;
    }
}