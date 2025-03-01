function largestNumber(firstNum, secondNum, thirdNum) {
    let numbers = [firstNum, secondNum, thirdNum];
    let largest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        
        if (currentNum > largest) {
            largest = currentNum;
        }
    }

    console.log(`The largest number is ${largest}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);