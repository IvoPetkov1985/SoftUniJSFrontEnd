function deleteByEmail() {
    const inputFieldElement = document.querySelector("input[type=text][name=email]");
    const resultDivElement = document.getElementById("result");
    const rowElements = document.querySelectorAll("table tbody tr");

    const inputEmailText = inputFieldElement.value;
    let isFound = false;

    for (const row of rowElements) {
        const email = row.children[1].textContent;

        if (email === inputEmailText) {
            row.remove();
            isFound = true;
            break;
        }
    }

    if (isFound) {
        resultDivElement.textContent = "Deleted.";
    } else {
        resultDivElement.textContent = "Not found.";
    }
}