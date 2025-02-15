function repeatString(text, count) {
    let resultString = text.repeat(count);
    return resultString;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

function repeat(str, times) {
    let result = "";

    for (let i = 0; i < times; i++) {
        result = concat(result, str);
    }

    function concat(result, text) {
        return result += text;
    }

    console.log(result);
}

repeat("Me", 10);
repeat("abc", 3);
repeat("String", 2);