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