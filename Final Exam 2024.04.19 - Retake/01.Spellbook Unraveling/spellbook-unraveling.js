function spellbook(input) {
    let spell = input.shift();

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let tokens = commandLine.split("!");
        let command = tokens[0];

        switch (command) {
            case "RemoveEven":
                spell = spell.split("").filter((_, i) => i % 2 === 0).join("");
                console.log(spell);
                break;

            case "TakePart":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                spell = spell.substring(startIndex, endIndex);
                console.log(spell);
                break;

            case "Reverse":
                let substring = tokens[1];
                if (spell.includes(substring)) {
                    spell = spell.replace(substring, "");
                    spell += substring.split("").reverse().join("");
                    console.log(spell);
                } else {
                    console.log("Error");
                }
                break;
        }

        commandLine = input.shift();
    }

    console.log(`The concealed spell is: ${spell}`);
}

spellbook(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]
);

spellbook(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"]
);