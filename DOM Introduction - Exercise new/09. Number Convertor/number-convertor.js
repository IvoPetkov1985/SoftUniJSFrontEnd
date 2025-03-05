function solve() {
    const numberInputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    const outputMenuElement = document.getElementById("selectMenuTo");

    const inputNumber = Number(numberInputElement.value);
    let result = 0;

    if (outputMenuElement.value === "binary") {
        result = convertNumToBinary(inputNumber);
    } else if (outputMenuElement.value === "hexadecimal") {
        result = convertNumToHexadecimal(inputNumber);
    } else {
        result = "";
    }

    resultElement.value = result;

    function convertNumToBinary(number) {
        return number.toString(2);
    }

    function convertNumToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }
}