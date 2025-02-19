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