function sameNumbers(number) {
    let numAsString = number.toString();
    let areSame = true;
    let firstSymbol = numAsString[0];
    let sum = Number(firstSymbol);

    for (let i = 1; i < numAsString.length; i++) {
        if (numAsString[i] !== firstSymbol) {
            areSame = false;
        }

        sum += Number(numAsString[i]);
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);

function solve(inputNumber) {
    let digitsArray = inputNumber.toString().split("").map(Number);
    let firstDigit = digitsArray[0];
    console.log(digitsArray.every(x => x === firstDigit));
    console.log(digitsArray.reduce((acc, x) => acc + x, 0));
}

solve(2222222);
solve(1234);