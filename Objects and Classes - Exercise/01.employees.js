function employees(arrayOfStrings) {
    let employeesObj = {};

    for (let name of arrayOfStrings) {
        employeesObj[name] = name.length;
    }

    for (let name in employeesObj) {
        console.log(`Name: ${name} -- Personal Number: ${employeesObj[name]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

function solve(arrayOfNames) {
    let allEmployees = [];

    for (let name of arrayOfNames) {
        let employee = {
            name: name,
            personalNum: name.length
        };

        allEmployees.push(employee);
    }

    for (let employee of allEmployees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

function fancy(arrayOfNames) {
    arrayOfNames.map(name => ({ name: name, personalNum: name.length }))
        .forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.personalNum}`));
}

fancy([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

fancy([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

function solveMap(arrayOfStrings) {
    let movieStars = new Map();

    for (let name of arrayOfStrings) {
        movieStars.set(name, name.length);
    }

    for (let [name, num] of movieStars) {
        console.log(`Name: ${name} -- Personal Number: ${num}`);
    }
}

solveMap([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

solveMap([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);