function solve(input) {
    let team = {};
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let infoLine = input.shift();
        let [name, shift, coffeeTypes] = infoLine.split(" ");

        team[name] = {
            shift: shift,
            baverages: coffeeTypes.split(",")
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "Closed") {
        let tokens = commandLine.split(" / ");
        let command = tokens[0];
        let baristaName = tokens[1];
        let barista = team[baristaName];

        if (command === "Prepare") {
            let currentShift = tokens[2]
            let coffeeType = tokens[3];

            if (barista.shift === currentShift && barista.baverages.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
        } else if (command === "Change Shift") {
            let newShift = tokens[2];
            barista.shift = newShift;
            console.log(`${baristaName} has updated his shift to: ${newShift}`);
        } else if (command === "Learn") {
            let newCoffeeType = tokens[2];

            if (barista.baverages.includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            } else {
                barista.baverages.push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }

        commandLine = input.shift();
    }

    Object.entries(team).forEach(entry => {
        let name = entry[0];
        let shift = entry[1].shift;
        let drinks = entry[1].baverages.join(", ");
        console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${drinks}`);
    })
}

solve(['3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);

solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
);