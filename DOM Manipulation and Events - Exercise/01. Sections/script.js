function create(words) {
    const selectedDiv = document.getElementById("content");
    const wordsArray = Array.from(words);

    for (const currentWord of wordsArray) {
        const paragraph = document.createElement("p");
        paragraph.textContent = currentWord;
        paragraph.style.display = "none";
        const divElement = document.createElement("div");
        divElement.appendChild(paragraph);

        divElement.addEventListener("click", () => {
            const selectedP = divElement.querySelector("p");
            selectedP.style.display = "block";
        });

        selectedDiv.appendChild(divElement);
    }
}