function censoredWords(text, word) {
    const replaceString = "*".repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, replaceString);
    }

    console.log(text);
}

censoredWords('Find the hidden word', 'hidden');
censoredWords('A small sentence with some words', 'small');

function solve(text, censoredWord) {
    let result = text.replaceAll(censoredWord, "*".repeat(censoredWord.length));
    console.log(result);
}

solve('Find the hidden word', 'hidden');
solve('A small sentence with some words', 'small');