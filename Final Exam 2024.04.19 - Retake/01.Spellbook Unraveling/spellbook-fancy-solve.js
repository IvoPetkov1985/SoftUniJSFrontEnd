function solve(input) {
    let spell = input.shift();

    let commands = {
        RemoveEven: (spell) => {
            return spell
                .split("")
                .filter((_, index) => index % 2 === 0)
                .join("");
        },

        TakePart: (spell, startIndex, endIndex) => {
            return spell.substring(startIndex, endIndex);
        },

        Reverse: (spell, substring) => {
            if (spell.includes(substring)) {
                return spell
                    .replace(substring, "") + substring
                        .split("")
                        .reverse()
                        .join("");
            }

            return "Error";
        }
    };

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "End") {
        let tokens = commandLine.split("!");
        let command = tokens[0];

        if (command === "RemoveEven") {
            console.log(spell = commands[command](spell));
        } else if (command === "TakePart") {
            console.log(spell = commands[command](spell, Number(tokens[1]), Number(tokens[2])));
        } else if (command === "Reverse") {
            let result = "";
            if (commands[command](spell, tokens[1]) !== "Error") {
                spell = commands[command](spell, tokens[1]);
                result = spell;
            } else {
                result = "Error";
            }
            console.log(result);
        }

        index++;
        commandLine = input[index];
    }

    console.log(`The concealed spell is: ${spell}`);
}

solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]
);

solve(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"]
);