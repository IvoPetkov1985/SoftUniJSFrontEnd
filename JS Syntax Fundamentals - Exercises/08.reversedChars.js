function reversedChars(firstChar, secondChar, thirdChar) {
    let concatenatedString = firstChar + secondChar + thirdChar;
    let resultString = "";

    for (let i = 0; i < concatenatedString.length; i++) {
        resultString += `${concatenatedString[concatenatedString.length - 1 - i]} `;
    }

    console.log(resultString.trimEnd());
}

reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');

function solve(firstChar, secondChar, thirdChar) {
    let arrayOfChars = [];
    arrayOfChars.push(firstChar, secondChar, thirdChar);
    let resultString = arrayOfChars.reverse().join(" ");
    console.log(resultString);
}

solve('A', 'B', 'C');
solve('1', 'L', '&');