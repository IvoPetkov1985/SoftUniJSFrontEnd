function solve() {
    const textInputElement = document.getElementById("text");
    const convInputElement = document.getElementById("naming-convention");
    const resultSpanElement = document.getElementById("result");

    let text = textInputElement.value;
    let convention = convInputElement.value;
    let outputText = "";

    switch (convention) {
        case "Pascal Case":
            outputText = convertText(text);
            break;
        case "Camel Case":
            outputText = convertText(text)
                .charAt(0)
                .toLowerCase()
                .concat(convertText(text).slice(1));
            break;
        default:
            outputText = "Error!";
            break;
    }

    resultSpanElement.textContent = outputText;

    function convertText(text) {
        return text
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
            .join("");
    }
}