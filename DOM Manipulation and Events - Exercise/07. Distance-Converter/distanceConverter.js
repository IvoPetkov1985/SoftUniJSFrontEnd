function attachEventsListeners() {
    const inputSelectMenu = document.getElementById("inputUnits");
    const outputSelectMenu = document.getElementById("outputUnits");
    const inputField = document.getElementById("inputDistance");
    const outputField = document.getElementById("outputDistance");
    const convertButton = document.getElementById("convert");

    const convertions = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254
    };

    convertButton.addEventListener("click", () => {
        const inputDistance = inputField.value;
        const inputUnits = inputSelectMenu.value;
        const outputUnits = outputSelectMenu.value;
        const result = inputDistance * convertions[inputUnits] / convertions[outputUnits];
        outputField.value = result;
    });
}