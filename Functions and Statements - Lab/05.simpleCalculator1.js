function simpleCalculator(firstNum, secondNum, oper) {
    let calc = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };

    return calc[oper](firstNum, secondNum);
}

console.log(simpleCalculator(5, 6, "multiply"));
console.log(simpleCalculator(40, 8, "divide"));
console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(12, 19, "add"));
console.log(simpleCalculator(50, 13, "subtract"));