function getSmallestNum(firstNum, secondNum, thirdNum) {
    let smallestNum = Math.min(firstNum, secondNum, thirdNum);
    console.log(smallestNum);
}

getSmallestNum(2, 5, 3);
getSmallestNum(600, 342, 123);
getSmallestNum(25, 21, 4);
getSmallestNum(2, 2, 2);

function solve(firstNum, secondNum, thirdNum) {

    console.log(getSmallest([firstNum, secondNum, thirdNum]));

    function getSmallest(numbers) {
        return Math.min(...numbers);
    }
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
solve(2, 2, 2);