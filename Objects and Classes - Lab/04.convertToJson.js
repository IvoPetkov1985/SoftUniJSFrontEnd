function convertToJson(firstName, lastName, hairColor) {
    let personInfoObj = {
        name: firstName,
        lastName,
        hairColor
    };

    let outputText = JSON.stringify(personInfoObj);
    console.log(outputText);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');