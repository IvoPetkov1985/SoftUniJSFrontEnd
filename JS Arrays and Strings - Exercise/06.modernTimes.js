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