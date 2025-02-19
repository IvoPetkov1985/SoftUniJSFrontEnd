function loadingBar(number) {
    let resultString = "";

    let loaded = number / 10;
    resultString += "%".repeat(loaded);
    let notLoaded = (100 - number) / 10;
    resultString += ".".repeat(notLoaded);

    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${resultString}]`);
    } else {
        console.log(`${number}% [${resultString}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

function solve(number) {
    let bar = "";
    const loaded = number / 10;

    for (let i = 0; i < loaded; i++) {
        bar += "%";
    }

    const notLoaded = 10 - loaded;

    for (let i = 0; i < notLoaded; i++) {
        bar += ".";
    }

    if (loaded === 10) {
        console.log(`${number}% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${number}% [${bar}]`);
        console.log("Still loading...");
    }
}

solve(30);
solve(50);
solve(100);