function reverseAnArray(count, inputArray) {
    let newArray = [];

    for (let i = 0; i < count; i++) {
        newArray[i] = inputArray[i];
    }

    let reversedArray = [];

    for (let i = count - 1; i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }

    console.log(reversedArray.join(" "));
}

reverseAnArray(3, [10, 20, 30, 40, 50]);
reverseAnArray(4, [-1, 20, 99, 5]);
reverseAnArray(2, [66, 43, 75, 89, 47]);

function solve(count, inputArray) {
    let resultArray = [];

    for (let i = count - 1; i >= 0; i--) {
        resultArray.push(inputArray[i]);
    }

    let resultString = "";

    for (let el of resultArray) {
        resultString += `${el} `;
    }

    console.log(resultString.trim());
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);

function solveSliceReverse(count, inputArray) {
    return inputArray.slice(0, count).reverse().join(" ");
}

console.log(solveSliceReverse(3, [10, 20, 30, 40, 50]));
console.log(solveSliceReverse(4, [-1, 20, 99, 5]));
console.log(solveSliceReverse(2, [66, 43, 75, 89, 47]));