function oddAndEvenSum(inputNum) {
    let numAsString = inputNum.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let char of numAsString) {
        let currentDigit = Number(char);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));

function solve(inputNum) {
    let oddSum = 0;
    let evenSum = 0;

    while (inputNum > 0) {
        let currentDigit = inputNum % 10;

        if (currentDigit % 2 !== 0) {
            oddSum += currentDigit;
        } else {
            evenSum += currentDigit;
        }

        inputNum = Math.floor(inputNum / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));
console.log(solve(3495892137259234));

function solveWithArray(inputNum) {
    const evenFilter = x => x % 2 === 0;
    const oddFilter = x => x % 2 !== 0;
    const evenSum = calculateSum(inputNum, evenFilter);
    const oddSum = calculateSum(inputNum, oddFilter);

    return printResult(oddSum, evenSum);

    function printResult(odd, even) {
        console.log(`Odd sum = ${odd}, Even sum = ${even}`);
    }

    function calculateSum(number, filter) {
        return number
            .toString()
            .split("")
            .map(Number)
            .filter(filter)
            .reduce((a, x) => a + x, 0);
    }
}

solveWithArray(1000435);
solveWithArray(3495892137259234);