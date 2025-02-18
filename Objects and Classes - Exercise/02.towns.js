function towns(arrayOfStrings) {
    let allTowns = [];

    for (let townInfo of arrayOfStrings) {
        let tokens = townInfo.split(" | ");
        let name = tokens[0];
        let latitude = Number(tokens[1]);
        let longitude = Number(tokens[2]);
        let townObj = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        allTowns.push(townObj);
    }

    for (let info of allTowns) {
        console.log(info);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);