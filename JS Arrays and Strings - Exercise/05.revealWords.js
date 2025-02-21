function revealWords(selectedWords, text) {
    let wordsArray = selectedWords.split(", ");
    let textAsArray = text.split(" ");

    for (let word of wordsArray) {

        for (let i = 0; i < textAsArray.length; i++) {

            if (textAsArray[i].includes("*") &&
                textAsArray[i].length === word.length) {
                textAsArray[i] = word;
            }
        }
    }

    console.log(textAsArray.join(" "));
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);

function solve(words, text) {
    let wordsArray = words.split(", ");
    let textAsArray = text.split(" ");

    for (let currentWord of wordsArray) {
        textAsArray = textAsArray.map(w => w.startsWith("*") &&
            w.length === currentWord.length ? currentWord : w);
    }

    console.log(textAsArray.join(" "));
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
);