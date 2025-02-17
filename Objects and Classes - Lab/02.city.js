function city(cityInfoObj) {
    for (let key in cityInfoObj) {
        console.log(`${key} -> ${cityInfoObj[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});

function solve(cityInfo) {
    let tuplesArr = Object.entries(cityInfo);

    for (let [key, value] of tuplesArr) {
        console.log(`${key} -> ${value}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});