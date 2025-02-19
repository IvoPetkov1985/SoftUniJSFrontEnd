function piccolo(arrayOfCommands) {
    let parking = new Set();

    for (let line of arrayOfCommands) {
        let [direction, car] = line.split(", ");

        if (direction === "IN") {
            parking.add(car);
        } else if (direction === "OUT") {
            parking.delete(car);
        }
    }

    let carsArray = Array.from(parking);

    if (carsArray.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        carsArray.sort((a, b) => a.localeCompare(b))
            .forEach(car => console.log(car));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);

function solve(input) {
    let lot = new Map();

    for (let row of input) {
        let [direction, carNumber] = row.split(", ");

        if (direction === "IN") {
            lot.set(carNumber, true);
        } else {
            lot.set(carNumber, false);
        }
    }

    let entries = Array.from(lot);
    let resultEntries = entries.filter(e => e[1] === true);

    if (resultEntries.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        resultEntries.sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(e => console.log(e[0]));
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);

function solveObj(arrayOfStrings) {
    let lot = {};

    for (let row of arrayOfStrings) {
        let [direction, carNumber] = row.split(", ");

        direction === "IN"
            ? lot[carNumber] = true
            : lot[carNumber] = false;
    }

    let selectedEntries = Object.entries(lot)
        .filter(e => e[1] === true)
        .sort((a, b) => a[0].localeCompare(b[0]));

    if (selectedEntries.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        selectedEntries.forEach(e => console.log(e[0]));
    }
}

solveObj(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

solveObj(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);