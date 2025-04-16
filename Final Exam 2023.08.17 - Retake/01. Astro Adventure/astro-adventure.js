function adventure(input) {
    let astronautsCount = Number(input.shift());
    let team = [];

    for (let i = 0; i < astronautsCount; i++) {
        let detailsLine = input.shift();
        let [name, oxygen, energy] = detailsLine.split(" ");
        team.push({ name, oxygen: Number(oxygen), energy: Number(energy) });
    }

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let [command, name, amount] = commandLine.split(" - ");
        amount = Number(amount);
        let selectedAstronaut = team.find(a => a.name === name);

        switch (command) {
            case "Explore":
                if (selectedAstronaut.energy >= amount) {
                    selectedAstronaut.energy -= amount;
                    console.log(`${name} has successfully explored a new area and now has ${selectedAstronaut.energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;

            case "Refuel":
                let oldEnergyLevel = selectedAstronaut.energy;
                selectedAstronaut.energy = Math.min(selectedAstronaut.energy + amount, 200);
                let diff = selectedAstronaut.energy - oldEnergyLevel;
                console.log(`${name} refueled their energy by ${diff}!`);
                break;

            case "Breathe":
                let oldOxygenLevel = selectedAstronaut.oxygen;
                selectedAstronaut.oxygen = Math.min(selectedAstronaut.oxygen + amount, 100);
                let oxygenDiff = selectedAstronaut.oxygen - oldOxygenLevel;
                console.log(`${name} took a breath and recovered ${oxygenDiff} oxygen!`);
                break;
        }

        commandLine = input.shift();
    }

    for (let astronaut of team) {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
    }
}

adventure(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
);

adventure(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
);