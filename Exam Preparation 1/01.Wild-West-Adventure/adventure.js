function wildWestAdventure(input) {
    let count = Number(input.shift());
    let posse = {};

    for (let i = 0; i < count; i++) {
        let heroInfoLine = input.shift();
        let [name, inputHp, inputBullets] = heroInfoLine.split(" ");

        posse[name] = {
            hp: Number(inputHp),
            bullets: Number(inputBullets)
        };
    }

    let commandLine = input.shift();

    while (commandLine !== "Ride Off Into Sunset") {
        let tokens = commandLine.split(" - ");
        let command = tokens[0];
        let heroName = tokens[1];
        let selectedHero = posse[heroName];

        if (command === "FireShot") {
            let target = tokens[2];

            if (selectedHero.bullets) {
                selectedHero.bullets--;
                console.log(`${heroName} has successfully hit ${target} and now has ${selectedHero.bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (command === "TakeHit") {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];

            selectedHero.hp -= damage;

            if (selectedHero.hp > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${selectedHero.hp} HP!`);
            } else {
                console.log(`${heroName} was gunned down by ${attacker}!`);
                delete posse[heroName];
            }
        } else if (command === "Reload") {
            if (selectedHero.bullets < 6) {
                let reloadedBullets = 6 - selectedHero.bullets;
                selectedHero.bullets = 6;
                console.log(`${heroName} reloaded ${reloadedBullets} bullets!`);
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        } else if (command === "PatchUp") {
            if (selectedHero.hp < 100) {
                let amount = Number(tokens[2]);
                selectedHero.hp = Math.min(100, selectedHero.hp + amount);
                console.log(`${heroName} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${heroName} is in full health!`);
            }
        }

        commandLine = input.shift();
    }

    Object.keys(posse).forEach(hero => {
        console.log(hero);
        console.log(` HP: ${posse[hero].hp}`);
        console.log(` Bullets: ${posse[hero].bullets}`);
    })
}

wildWestAdventure(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]
);

wildWestAdventure(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"]
);

wildWestAdventure(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]
);