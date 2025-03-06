function solve() {
    const textAreaElement = document.getElementById("input");
    const outputDivElement = document.getElementById("output");

    const text = textAreaElement.value;
    const sentencesArray = text.split(".")
        .map(s => s.trim() + ".")
        .filter(s => !!s);

    sentencesArray.pop();

    while (sentencesArray.length > 0) {
        let p = document.createElement("p");
        p.textContent = sentencesArray.splice(0, 3).join("");
        outputDivElement.appendChild(p);
    }
}