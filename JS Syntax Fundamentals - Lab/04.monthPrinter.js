function monthPrinter(inputNumber) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let result = "";

    if (inputNumber >= 1 && inputNumber <= months.length) {
        result = months[inputNumber - 1];
    } else {
        result = "Error!";
    }

    console.log(result);
}

monthPrinter(2);
monthPrinter(4);
monthPrinter(13);

function solve(inputNumber) {
    let months = new Map();
    months.set(1, "January");
    months.set(2, "February");
    months.set(3, "March");
    months.set(4, "April");
    months.set(5, "May");
    months.set(6, "June");
    months.set(7, "July");
    months.set(8, "August");
    months.set(9, "September");
    months.set(10, "October");
    months.set(11, "November");
    months.set(12, "December");

    if (inputNumber >= 1 && inputNumber <= 12) {
        console.log(months.get(inputNumber));
    } else {
        console.log("Error!");
    }
}

solve(2);
solve(4);
solve(13);