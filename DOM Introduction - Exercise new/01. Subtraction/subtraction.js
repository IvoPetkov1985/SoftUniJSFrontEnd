function subtract() {
    const firstInputElement = document.querySelector("#firstNumber");
    const secondInputElement = document.querySelector("#secondNumber");
    const resultElement = document.querySelector("#result");

    const firstNumValue = Number(firstInputElement.value);
    const secondNumValue = Number(secondInputElement.value);
    const result = firstNumValue - secondNumValue;
    resultElement.textContent = result;
}