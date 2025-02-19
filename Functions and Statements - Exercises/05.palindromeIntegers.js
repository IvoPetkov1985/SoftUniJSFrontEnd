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