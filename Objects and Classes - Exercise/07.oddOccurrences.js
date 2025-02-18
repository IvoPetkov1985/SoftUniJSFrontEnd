function oddOccurrences(input) {
    let wordsArr = input.split(" ");
    let wordsStorage = {};

    for (let word of wordsArr) {
        if (wordsStorage.hasOwnProperty(word.toLowerCase())) {
            wordsStorage[word.toLowerCase()] += 1;
        } else {
            wordsStorage[word.toLowerCase()] = 1;
        }
    }

    let resultArr = [];

    for (let key in wordsStorage) {
        if (wordsStorage[key] % 2 !== 0) {
            resultArr.push(key);
        }
    }

    console.log(resultArr.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

function solve(inputString) {
    let allWords = inputString.toLowerCase().split(" ");
    let wordsMap = new Map();

    for (let word of allWords) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            wordsMap.set(word, wordsMap.get(word) + 1);
        }
    }

    let resultArr = [];
    for (let [word, count] of wordsMap) {
        if (count % 2 !== 0) {
            resultArr.push(word);
        }
    }

    console.log(resultArr.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');