function modernTimes(text) {
    let pattern = new RegExp("#[A-Za-z]+", "g");
    let matches = text.matchAll(pattern);

    for (let match of matches) {
        console.log(match[0].slice(1));
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');

function solve(text) {
    let pattern = /\#(?<searched>[A-Za-z]+)/g;
    let matches = text.matchAll(pattern);
    let matchesAsArr = Array.from(matches);

    for (let match of matchesAsArr) {
        console.log(match.groups.searched);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');

function stringSolve(inputText) {
    let arrayOfStrings = inputText.split(" ");

    for (let word of arrayOfStrings) {

        if (word.startsWith("#") && word.length > 1) {
            let isValid = true;

            for (let i = 1; i < word.length; i++) {

                if (!((word[i] >= "a" && word[i] <= "z") ||
                    (word[i] >= "A" && word[i] <= "Z"))) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(word.substring(1));
            }
        }
    }
}

stringSolve('Nowadays everyone uses # to tag a #special word in #socialMedia');
stringSolve('The symbol # is known #variously in English-speaking #regions as the #number sign');