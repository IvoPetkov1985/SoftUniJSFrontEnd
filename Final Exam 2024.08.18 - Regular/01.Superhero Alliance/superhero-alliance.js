function alliance(input) {
    let heroesCount = Number(input.shift());
    let posse = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroInfoLine = input.shift();
        let [name, superPower, energy] = heroInfoLine.split("-");

        posse[name] = {
            superPower: superPower.split(","),
            energy: Number(energy)
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "Evil Defeated!") {
        let tokens = commandLine.split(" * ");
        let command = tokens[0];
        let heroName = tokens[1];
        let selectedHero = posse[heroName];

        switch (command) {
            case "Use Power":
                let demandedPower = tokens[2];
                let requiredEnergy = Number(tokens[3]);

                if (selectedHero.superPower.includes(demandedPower) &&
                    selectedHero.energy >= requiredEnergy) {
                    selectedHero.energy -= requiredEnergy;
                    console.log(`${heroName} has used ${demandedPower} and now has ${selectedHero.energy} energy!`);
                } else {
                    console.log(`${heroName} is unable to use ${demandedPower} or lacks energy!`);
                }
                break;

            case "Train":
                let trainingEnergy = Number(tokens[2]);

                if (selectedHero.energy < 100) {
                    let currentEnergy = selectedHero.energy;
                    selectedHero.energy = Math.min(100, selectedHero.energy + trainingEnergy);
                    console.log(`${heroName} has trained and gained ${selectedHero.energy - currentEnergy} energy!`);
                } else {
                    console.log(`${heroName} is already at full energy!`);
                }
                break;

            case "Learn":
                let newPower = tokens[2];

                if (!selectedHero.superPower.includes(newPower)) {
                    selectedHero.superPower.push(newPower);
                    console.log(`${heroName} has learned ${newPower}!`);
                } else {
                    console.log(`${heroName} already knows ${newPower}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    Object.entries(posse).forEach(heroEntry => {
        let heroName = heroEntry[0];
        let heroPower = heroEntry[1].superPower;
        let heroEnergy = heroEntry[1].energy;
        console.log(`Superhero: ${heroName}`);
        console.log(`- Superpowers: ${heroPower.join(", ")}`);
        console.log(`- Energy: ${heroEnergy}`);
    });
}

alliance([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
]);

alliance([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
]);

alliance([
    "2",
    "Iron Man-Repulsor Beams,Flight-100",
    "Thor-Lightning Strike,Hammer Throw-50",
    "Train * Thor * 20",
    "Learn * Thor * Hammer Throw",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
]);