function evenAndOddSubtraction(inputArray) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of inputArray) {
        num = Number(num);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    const result = evenSum - oddSum;
    console.log(result);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);

function solve(inputArray) {
    let evenSum = 0;
    let oddSum = 0;

    inputArray
        .filter(function (e) {
            return e % 2 === 0
        })
        .forEach(function (e) {
            evenSum += e;
        });

    inputArray
        .filter(function (e) {
            return e % 2 !== 0;
        })
        .forEach(function (e) {
            oddSum += e;
        });

    const result = evenSum - oddSum;
    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);

function solveWithReduce(inputArray) {
    const evenSum = inputArray
        .filter(x => x % 2 === 0)
        .reduce((acc, value) => acc + value, 0);

    const oddSum = inputArray
        .filter(x => x % 2 !== 0)
        .reduce((acc, value) => acc + value, 0);

    return evenSum - oddSum;
}

console.log(solveWithReduce([1, 2, 3, 4, 5, 6]));
console.log(solveWithReduce([3, 5, 7, 9]));
console.log(solveWithReduce([2, 4, 6, 8, 10]));