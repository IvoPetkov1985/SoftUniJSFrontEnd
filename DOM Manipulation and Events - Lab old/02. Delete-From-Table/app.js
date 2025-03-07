function deleteByEmail() {
    const inputElement = document.querySelector("input[type=text][name=email]");
    const emailElements = document.querySelectorAll("tbody tr td:last-of-type");
    const resultDivElement = document.getElementById("result");
    const inputText = inputElement.value;

    if (!inputText) {
        return;
    }

    let isFound = false;

    for (const tdElement of emailElements) {
        if (tdElement.textContent === inputText) {
            tdElement.parentElement.remove();
            isFound = true;
            break;
        }
    }

    if (!!isFound) {
        resultDivElement.textContent = "Deleted.";
    } else {
        resultDivElement.textContent = "Not found.";
    }
}