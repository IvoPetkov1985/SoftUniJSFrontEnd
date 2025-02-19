function addAndSubtract(firstNum, secondNum, thirdNum) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let midResult = add(firstNum, secondNum);
    let finalResult = subtract(midResult, thirdNum);
    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

function solve(firstNum, secondNum, thirdNum) {
    let calc = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    }

    let midResult = calc.add(firstNum, secondNum);
    let finalResult = calc.subtract(midResult, thirdNum);
    return finalResult;
}

console.log(solve(23, 6, 10));
console.log(solve(1, 17, 30));
console.log(solve(42, 58, 100));