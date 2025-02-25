function printAndSum(startNum, endNum) {
    const arrayOfNumbers = [];

    for (let i = startNum; i <= endNum; i++) {
        arrayOfNumbers.push(i);
    }

    console.log(arrayOfNumbers.join(" "));
    const sum = arrayOfNumbers.reduce((acc, x) => acc + x, 0);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

function solve(startNum, endNum) {
    let resultString = "";
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        resultString += `${i} `;
    }

    console.log(resultString.trim());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);