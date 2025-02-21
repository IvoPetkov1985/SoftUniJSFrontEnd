function arrayRotation(inputArray, rotations) {
    for (let i = 0; i < rotations % inputArray.length; i++) {
        let firstElement = inputArray.shift();
        inputArray.push(firstElement);
    }

    console.log(inputArray.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

function solve(array, rotations) {
    let arrayLength = array.length;

    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];

        for (let j = 1; j < arrayLength; j++) {
            array[j - 1] = array[j];
        }

        array[arrayLength - 1] = firstElement;
    }

    let result = "";

    for (element of array) {
        result += element + " ";
    }

    console.log(result.trim());
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);