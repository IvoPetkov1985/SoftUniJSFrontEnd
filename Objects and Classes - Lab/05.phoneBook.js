function phoneBook(arrayOfStrings) {
    let names = {};

    for (let tuple of arrayOfStrings) {
        let [name, phone] = tuple.split(" ");
        names[name] = phone;
    }

    for (let key in names) {
        console.log(`${key} -> ${names[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);

function solve(arrayOfStrings) {
    let phoneBook = {};

    for (let str of arrayOfStrings) {
        let tokens = str.split(" ");
        let name = tokens[0];
        let phoneNumber = tokens[1];
        phoneBook[name] = phoneNumber;
    }

    let entries = Object.entries(phoneBook);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);