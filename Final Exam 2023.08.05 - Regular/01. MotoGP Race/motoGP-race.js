function motoGP(input) {
    let racersCount = Number(input.shift());
    let race = {};

    for (let i = 0; i < racersCount; i++) {
        let [name, fuel, position] = input.shift().split("|");

        race[name] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "Finish") {
        let tokens = commandLine.split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let selectedRider = race[name];

        if (command === "StopForFuel") {
            let minimumFuel = Number(tokens[2]);
            let changedPosition = Number(tokens[3]);

            if (selectedRider.fuel < minimumFuel) {
                selectedRider.position = changedPosition;
                console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${name} does not need to stop for fuel!`);
            }
        } else if (command === "Overtaking") {
            let anotherName = tokens[2];
            let riderTwo = race[anotherName];
            let riderOnePosition = selectedRider.position;
            let riderTwoPosition = riderTwo.position;

            if (selectedRider.position < riderTwo.position) {
                riderTwo.position = riderOnePosition;
                selectedRider.position = riderTwoPosition;
                console.log(`${name} overtook ${anotherName}!`);
            }

        } else if (command === "EngineFail") {
            let lapsLeft = Number(tokens[2]);
            delete race[name];
            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }

        commandLine = input.shift();
    }

    for (let name in race) {
        console.log(name);
        console.log(`  Final position: ${race[name].position}`);
    }
}

motoGP(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
);

motoGP(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
);