function perfectNumber(number) {
    let sum = 0;

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    let result = "";

    if (sum === number) {
        result = "We have a perfect number!";
    } else {
        result = "It's not so perfect.";
    }

    return result;
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));