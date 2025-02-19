function factorialDivision(firstNum, secondNum) {
    let firstFactorial = factorialCalculate(firstNum);
    let secondFactorial = factorialCalculate(secondNum);
    let result = (firstFactorial / secondFactorial).toFixed(2);
    return result;

    function factorialCalculate(num) {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));