function wordsTracker(inputArray) {
    let searchedWords = inputArray.shift().split(" ");

    let wordsCounter = {};

    for (let searchedWord of searchedWords) {
        wordsCounter[searchedWord] = 0;
    }

    for (let word of inputArray) {
        if (wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word]++;
        }
    }

    let wordEntries = Object.entries(wordsCounter);
    wordEntries.sort((a, b) => b[1] - a[1])

    for (let entry of wordEntries) {
        console.log(`${entry[0]} - ${entry[1]}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);