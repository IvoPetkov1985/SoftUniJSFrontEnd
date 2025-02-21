function printEveryNthElement(arrayOfStrings, step) {
    let resultArray = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (i % step === 0) {
            resultArray.push(arrayOfStrings[i]);
        }
    }

    return resultArray;
}

console.log(printEveryNthElement(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNthElement(['1', '2', '3', '4', '5'], 6));

function solve(arrayOfStrings, step) {
    return arrayOfStrings.filter((el, i) => i % step === 0);
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));