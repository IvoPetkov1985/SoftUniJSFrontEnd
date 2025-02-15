function signCheck(numOne, numTwo, numThree) {
    let firstProduct = multiplyer(numOne, numTwo);
    let result = multiplyer(firstProduct, numThree);

    function multiplyer(x, y) {
        return x * y;
    }

    if (result > 0) {
        return "Positive";
    }
    else {
        return "Negative";
    }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));