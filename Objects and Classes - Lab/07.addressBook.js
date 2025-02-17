function addressBook(arrayOfStrings) {
    let addresses = {};
    let arrayLength = arrayOfStrings.length;

    for (let i = 0; i < arrayLength; i++) {
        let tokens = arrayOfStrings[i].split(":");
        let name = tokens[0];
        let address = tokens[1];
        addresses[name] = address;
    }

    let entries = Object.entries(addresses)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        let name = entry[0];
        let address = entry[1];
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);

function solve(arrayOfStrings) {
    let addressEntries = {};

    for (let data of arrayOfStrings) {
        let [name, address] = data.split(":");
        addressEntries[name] = address;
    }

    Object.entries(addressEntries)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(a => console.log(`${a[0]} -> ${a[1]}`));
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);