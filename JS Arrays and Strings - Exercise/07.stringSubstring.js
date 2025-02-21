function stringSubstring(searchedWord, text) {
    let splittedText = text.toLowerCase().split(" ");

    for (let word of splittedText) {

        if (word === searchedWord.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

stringSubstring('python',
    'JavaScript is the best programming language'
);