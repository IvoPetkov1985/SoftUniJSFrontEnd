function solve(input) {
    let horsesArray = input.shift().split("|");
    horsesArray.reverse();
    let race = [];

    horsesArray.forEach((horse, index) => {
        let horseObj = {
            name: horse,
            position: index + 1
        };

        race.push(horseObj);
    })

    let commandLine = input.shift();

    while (commandLine !== "Finish") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let name = tokens[1];
        let selectedHorse = race.find(h => h.name === name);

        if (command === "Retake") {
            let overtakenName = tokens[2];
            let overtakenHorse = race.find(h => h.name === overtakenName);

            if (!!overtakenHorse && !!selectedHorse && selectedHorse.position > overtakenHorse.position) {
                let tempPosition = selectedHorse.position;
                selectedHorse.position = overtakenHorse.position;
                overtakenHorse.position = tempPosition;
                console.log(`${selectedHorse.name} retakes ${overtakenHorse.name}.`);
                sortRace(race);
            }
        } else if (command === "Trouble") {
            if (!!selectedHorse && selectedHorse.position < race.length) {
                let followingHorse = race.find(h => h.position === selectedHorse.position + 1);

                if (!!followingHorse) {
                    selectedHorse.position += 1;
                    followingHorse.position -= 1;
                    console.log(`Trouble for ${selectedHorse.name} - drops one position.`);
                    sortRace(race);
                }
            }
        } else if (command === "Rage") {
            if (!!selectedHorse && selectedHorse.position === 2) {
                let firstHorse = race.find(h => h.position === 1);
                firstHorse.position = 2;
                selectedHorse.position = 1;
            } else if (!!selectedHorse && selectedHorse.position > 2) {
                let firstOvertakenHorse = race.find(h => h.position === selectedHorse.position - 1);
                let secondOvertakenHorse = race.find(h => h.position === selectedHorse.position - 2);
                firstOvertakenHorse.position += 1;
                secondOvertakenHorse.position += 1;
                selectedHorse.position -= 2;
            }
            console.log(`${selectedHorse.name} rages 2 positions ahead.`);
            sortRace(race);
        } else if (command === "Miracle") {
            sortRace(race);
            let lastHorse = race.shift();

            if (race.length) {
                race.forEach(horse => {
                    horse.position += 1;
                })
            }

            lastHorse.position = 1;
            race.push(lastHorse);
            console.log(`What a miracle - ${lastHorse.name} becomes first.`);
            sortRace(race);
        }

        commandLine = input.shift();
    }

    sortRace(race);
    let horseNames = race.map(h => h.name);
    console.log(horseNames.join("->"));
    let winnerHorseName = horseNames.pop();
    console.log(`The winner is: ${winnerHorseName}`);

    function sortRace(race) {
        race.sort((a, b) => b.position - a.position);
    }
}

solve(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']
);

solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
);

solve(['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly']
);