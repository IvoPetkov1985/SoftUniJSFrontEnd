function solve() {
    const thElements = document.getElementsByTagName("th");
    const tRowsElements = document.querySelectorAll("table tbody tr");
    const outputElement = document.getElementById("output");

    const thElementsNames = [];

    for (const thElement of thElements) {
        const columnName = thElement.textContent.toLowerCase().trim();
        thElementsNames.push(columnName);
    }

    const collectionLength = thElements.length;
    const arrayOfObjects = [];

    for (const row of tRowsElements) {

        const tdElements = row.querySelectorAll("td");
        const personInfoObj = {};

        for (let i = 0; i < collectionLength; i++) {
            const tdElement = tdElements[i];
            const tdElementText = tdElement.textContent;
            const correspondingThElement = thElements[i];
            const inputElement = correspondingThElement.querySelector("input");

            if (inputElement.checked) {
                const key = thElementsNames[i];
                const value = tdElementText;
                personInfoObj[key] = value;
            }
        }

        arrayOfObjects.push(personInfoObj);
    }

    const resultJson = JSON.stringify(arrayOfObjects);
    outputElement.value = resultJson;
}