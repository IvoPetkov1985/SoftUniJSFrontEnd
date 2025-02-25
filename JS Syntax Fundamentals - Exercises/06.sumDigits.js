function sumDigits(inputNumber) {
    const numAsString = inputNumber.toString();
    const stringLength = numAsString.length;
    let sum = 0;

    for (let i = 0; i < stringLength; i++) {
        const digit = Number(numAsString[i]);
        sum += digit;
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

function solve(inputNumber) {
    let sum = 0;
    let num = inputNumber;

    while (num > 0) {
        const digit = num % 10;
        sum += digit;

        num = Math.trunc(num / 10);
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);

function solveWithArray(inputNumber) {
    return inputNumber.toString()
        .split("")
        .map(Number)
        .reduce((acc, x) => acc + x, 0);
}

console.log(solveWithArray(245678));
console.log(solveWithArray(97561));
console.log(solveWithArray(543));