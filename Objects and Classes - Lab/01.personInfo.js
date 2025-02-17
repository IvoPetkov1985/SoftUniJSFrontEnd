function personInfo(firstName, lastName, age) {
    let obj = {
        firstName,
        lastName,
        age
    };

    return obj;
}

console.log(personInfo("George", "Smith", "18"));
console.log(personInfo("Peter", "Pan", "20"));

function person(firstName, lastName, age) {
    let obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj;
}

console.log(person("George", "Smith", "18"));
console.log(person("Peter", "Pan", "20"));