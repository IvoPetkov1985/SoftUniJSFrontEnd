function solve(input) {
    let message = input.shift();

    let commandLine = input.shift();

    while (commandLine !== "Buy") {
        let tokens = commandLine.split("?");
        let command = tokens[0];

        switch (command) {
            case "TakeEven":
                message = message.split("").filter((_, i) => i % 2 === 0).join("");
                console.log(message);
                break;

            case "ChangeAll":
                let oldSubstring = tokens[1];
                let newSubstring = tokens[2];

                while (message.includes(oldSubstring)) {
                    message = message.replace(oldSubstring, newSubstring);
                }

                console.log(message);
                break;

            case "Reverse":
                let substring = tokens[1];

                if (message.includes(substring)) {
                    message = message.replace(substring, "");
                    substring = substring.split("").reverse().join("");
                    message += substring;
                    console.log(message);
                } else {
                    console.log("error");
                }

                break;
        }

        commandLine = input.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]
);

solve(["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"]
);