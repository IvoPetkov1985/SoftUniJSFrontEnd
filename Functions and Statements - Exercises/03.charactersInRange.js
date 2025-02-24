function charctersInRange(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);
    let startCode = -1;
    let endCode = -1;

    if (firstCode < secondCode) {
        startCode = firstCode;
        endCode = secondCode;
    } else {
        startCode = secondCode;
        endCode = firstCode;
    }

    let charArray = [];

    for (let i = startCode + 1; i < endCode; i++) {
        let currentChar = String.fromCharCode(i);
        charArray.push(currentChar);
    }

    console.log(charArray.join(" "));
}

charctersInRange('a', 'd');
charctersInRange('#', ':');
charctersInRange('C', '#');

function solve(firstChar, secondChar) {
    let charsArr = [firstChar, secondChar];
    charsArr.sort();

    let [start, end] = charsArr;

    return getArrayOfChars(start, end).join(" ");

    function getArrayOfChars(startChar, endChar) {
        let resultArray = [];

        for (let i = startChar.charCodeAt(0) + 1; i < endChar.charCodeAt(0); i++) {
            resultArray.push(String.fromCharCode(i));
        }

        return resultArray;
    }
}

console.log(solve('a', 'd'));
console.log(solve('#', ':'));
console.log(solve('C', '#'));