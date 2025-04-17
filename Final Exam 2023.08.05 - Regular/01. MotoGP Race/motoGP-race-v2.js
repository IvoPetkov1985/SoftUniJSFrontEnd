function solve(input) {
    let racersCount = Number(input.shift());
    let motoRace = [];

    input.splice(0, racersCount).forEach(x => {
        let [name, fuel, position] = x.split("|");
        motoRace.push({ name, fuel: Number(fuel), position: Number(position) });
    });

    let commandLine = input.shift();

    while (commandLine !== "Finish") {
        let tokens = commandLine.split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let selectedRider = motoRace.find(r => r.name === name);

        switch (command) {
            case "StopForFuel":
                let minimumLevel = Number(tokens[2]);
                let changedPosition = Number(tokens[3]);

                if (selectedRider.fuel < minimumLevel) {
                    selectedRider.position = changedPosition;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${name} does not need to stop for fuel!`);
                }
                break;

            case "Overtaking":
                let secondName = tokens[2];
                let secondRider = motoRace.find(r => r.name === secondName);

                if (selectedRider.position < secondRider.position) {
                    let positionOne = selectedRider.position;
                    let positionTwo = secondRider.position;
                    selectedRider.position = positionTwo;
                    secondRider.position = positionOne;
                    console.log(`${name} overtook ${secondName}!`);
                }
                break;

            case "EngineFail":
                let lapsLeft = Number(tokens[2]);
                let index = motoRace.indexOf(selectedRider);
                motoRace.splice(index, 1);
                console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }

        commandLine = input.shift();
    }

    motoRace.forEach(racer => {
        console.log(racer.name);
        console.log(`  Final position: ${racer.position}`);
    })
}

solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
);

solve(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
);