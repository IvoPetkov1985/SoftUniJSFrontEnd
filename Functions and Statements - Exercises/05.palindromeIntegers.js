function palindromeIntegers(arrayOfInts) {
    let resultArr = [];

    for (let num of arrayOfInts) {
        let numAsString = num.toString();
        resultArr.push(isPalindrome(numAsString));
    }

    return resultArr.join("\n");

    function isPalindrome(numberAsString) {
        const stringLength = numberAsString.length;
        for (let i = 0; i < stringLength; i++) {
            if (numberAsString[i] !== numberAsString[stringLength - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
console.log(palindromeIntegers([32, 2, 232, 1010]));

function solve(inputArray) {
    inputArray.map(isPalindrome)
        .forEach(x => console.log(x));

    function isPalindrome(num) {
        let numAsString = num.toString();
        let reversedNum = numAsString.split("").reverse().join("");
        return numAsString === reversedNum;
    }
}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);