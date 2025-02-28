function mathOperations(firstNum, secondNum, oper) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const divideResidue = (a, b) => a % b;
    const exp = (a, b) => a ** b;

    let result = 0;

    switch (oper) {
        case "+": result = add(firstNum, secondNum); break;
        case "-": result = subtract(firstNum, secondNum); break;
        case "*": result = multiply(firstNum, secondNum); break;
        case "/": result = divide(firstNum, secondNum); break;
        case "%": result = divideResidue(firstNum, secondNum); break;
        case "**": result = exp(firstNum, secondNum); break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(3, 2, '%');

function solve(firstNum, secondNum, operator) {
    const calculator = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        divideResidue: (a, b) => a % b,
        exponentMultiply: (a, b) => a ** b,
    };

    if (operator === "+") {
        return calculator.add(firstNum, secondNum);
    } else if (operator === "-") {
        return calculator.subtract(firstNum, secondNum);
    } else if (operator === "*") {
        return calculator.multiply(firstNum, secondNum);
    } else if (operator === "/") {
        return calculator.divide(firstNum, secondNum);
    } else if (operator === "%") {
        return calculator.divideResidue(firstNum, secondNum);
    } else if (operator === "**") {
        return calculator.exponentMultiply(firstNum, secondNum);
    }
}

console.log(solve(5, 6, '+'));
console.log(solve(3, 5.5, '*'));
console.log(solve(3, 2, '%'));