function listOfNames(arrayOfNames) {
    arrayOfNames
        .sort((a, b) => a.localeCompare(b))
        .forEach((el, i) => console.log(`${i + 1}.${el}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

function solve(arrayOfNames) {
    let names = arrayOfNames.slice();
    let sorted = names.sort(function(a, b) {
        return a.localeCompare(b);
    });

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);