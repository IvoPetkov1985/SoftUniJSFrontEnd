function extractText() {
    let listElement = document.getElementById("items");
    let inputElement = document.getElementById("result");

    let text = listElement.textContent;
    text = text.split("\n").map(x => x.trim()).join("\n");
    inputElement.textContent = text;
}

function extractText() {
    const textElement = document.querySelector("#items");
    const areaElement = document.querySelector("#result");
    const text = textElement.innerText;
    areaElement.value = text;
}