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