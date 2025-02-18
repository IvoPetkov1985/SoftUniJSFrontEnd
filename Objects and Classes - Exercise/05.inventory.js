function inventory(arrayOfStrings) {
    let heroRegister = [];

    for (let row of arrayOfStrings) {
        let [name, level, items] = row.split(" / ");
        level = Number(level);

        let hero = {
            name,
            level,
            items
        };

        heroRegister.push(hero);
    }

    heroRegister.sort((a, b) => a.level - b.level);

    heroRegister.forEach(h => {
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);