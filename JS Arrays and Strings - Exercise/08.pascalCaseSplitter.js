function pascalCaseSplitter(text) {
    const startCode = 65;
    const endCode = 90;

    let extractedWords = [];
    let currentWord = "";

    for (let symbol of text) {

        if (symbol.charCodeAt(0) >= startCode && symbol.charCodeAt(0) <= endCode) {

            if (currentWord) {
                extractedWords.push(currentWord);
            }

            currentWord = "";
            currentWord += symbol;
        } else {
            currentWord += symbol;
        }
    }

    extractedWords.push(currentWord);
    console.log(extractedWords.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');

function regexSolve(inputText) {
    let pattern = new RegExp("[A-Z][a-z]*", "g");
    let matches = inputText.matchAll(pattern);
    let resultArray = Array.from(matches);
    let output = resultArray.map(r => r[0]).join(", ");
    console.log(output);
}

regexSolve('SplitMeIfYouCanHaHaYouCantOrYouCan');
regexSolve('HoldTheDoor');
regexSolve('ThisIsSoAnnoyingToDo');

function solve(text) {
    let pattern = /[A-Z][a-z]*/g;
    let resultArray = [];

    while (true) {
        let result = pattern.exec(text);
        let word = "";

        if (result) {
            word = result[0];
            resultArray.push(word);
        } else {
            break;
        }
    }

    console.log(resultArray.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');