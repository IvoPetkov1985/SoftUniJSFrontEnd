function calc() {
    let firstInputElement = document.getElementById("num1");
    let secondInputElement = document.getElementById("num2");
    let sumElement = document.getElementById("sum");

    let firstNum = Number(firstInputElement.value);
    let secondNum = Number(secondInputElement.value);
    let sum = firstNum + secondNum;
    sumElement.value = sum;
}