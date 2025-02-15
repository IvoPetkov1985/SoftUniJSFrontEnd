function simpleCalculator(num1, num2, oper) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    if (oper === "multiply") {
        return multiply(num1, num2);
    }

    if (oper === "divide") {
        return divide(num1, num2);
    }

    if (oper === "add") {
        return add(num1, num2);
    }

    if (oper === "subtract") {
        return subtract(num1, num2)
    }
}

console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, "add"));
console.log(simpleCalculator(50, 13, "subtract"));