function stringOccurrences(text, searchedWord) {
    let counter = 0;
    let textAsArray = text.split(" ");

    for (let word of textAsArray) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

stringOccurrences('This is a word and it also is a sentence', 'is');
stringOccurrences('softuni is great place for learning new programming languages', 'softuni');

function solve(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'g');
    let result = text.match(pattern) ?? [];
    console.log(result.length);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');