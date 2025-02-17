function convert(text) {
    let personObj = JSON.parse(text);    
    let entries = Object.entries(personObj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

function solve(jsonText) {
    let obj = JSON.parse(jsonText);
    let keys = Object.keys(obj);

    for (let key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

function solveForIn(json) {
    let infoObj = JSON.parse(json);

    for (let key in infoObj) {
        console.log(`${key}: ${infoObj[key]}`);
    }
}

solveForIn('{"name": "George", "age": 40, "town": "Sofia"}');
solveForIn('{"name": "Peter", "age": 35, "town": "Plovdiv"}');