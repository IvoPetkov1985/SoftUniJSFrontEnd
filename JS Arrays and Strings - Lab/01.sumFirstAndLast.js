function sumFirstAndLast(inputArray) {
    const firstElement = inputArray[0];
    const lastElement = inputArray[inputArray.length - 1];
    const result = firstElement + lastElement;
    console.log(result);
}

sumFirstAndLast([20, 30, 40]);
sumFirstAndLast([10, 17, 22, 33]);
sumFirstAndLast([11, 58, 69]);

function solve(inputArray) {
    let first = inputArray.shift();
    let last = inputArray.pop();
    let result = first + last;
    return result;
}

console.log(solve([20, 30, 40]));
console.log(solve([10, 17, 22, 33]));
console.log(solve([11, 58, 69]));