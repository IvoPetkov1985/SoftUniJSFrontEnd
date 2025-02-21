function sortingNumbers(inputArray) {
    inputArray.sort(function(a, b) {
        return a - b;
    });

    let resultArray = [];

    while (inputArray.length > 0) {
        let firstElement = inputArray.shift();
        resultArray.push(firstElement);
        let lastElement = inputArray.pop();

        if (lastElement) {
            resultArray.push(lastElement);
        }
    }

    return resultArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));