function experimentation(input) {
    let chemicalsCount = Number(input.shift());
    let lab = [];

    for (let i = 0; i < chemicalsCount; i++) {
        let [chemical, quantity] = input.shift().split(" # ");

        let chemObject = {
            chemical: chemical,
            quantity: Number(quantity),
            formula: null
        };

        lab.push(chemObject);
    }

    let commandLine = input.shift();

    while (commandLine !== "End") {
        let tokens = commandLine.split(" # ");
        let command = tokens[0];
        let chemName = tokens[1];

        let selectedChem = lab.find(c => c.chemical === chemName);

        switch (command) {
            case "Mix":
                let anotherChemName = tokens[2];
                let demandedQuantity = Number(tokens[3]);
                let anotherChem = lab.find(c => c.chemical === anotherChemName);

                if (selectedChem.quantity >= demandedQuantity &&
                    anotherChem.quantity >= demandedQuantity) {
                    selectedChem.quantity -= demandedQuantity;
                    anotherChem.quantity -= demandedQuantity;
                    console.log(`${chemName} and ${anotherChemName} have been mixed. ${demandedQuantity} units of each were used.`);
                } else {
                    console.log(`Insufficient quantity of ${chemName}/${anotherChemName} to mix.`);
                }
                break;

            case "Replenish":
                let amount = Number(tokens[2]);

                if (!selectedChem) {
                    console.log(`The Chemical ${chemName} is not available in the lab.`);
                } else {
                    let oldQuantity = selectedChem.quantity;
                    selectedChem.quantity += amount;

                    if (selectedChem.quantity > 500) {
                        selectedChem.quantity = 500;
                        let diff = 500 - oldQuantity;
                        console.log(`${chemName} quantity increased by ${diff} units, reaching maximum capacity of 500 units!`);
                    } else {
                        console.log(`${chemName} quantity increased by ${amount} units!`);
                    }
                }
                break;

            case "Add Formula":
                let formula = tokens[2];

                if (!selectedChem) {
                    console.log(`The Chemical ${chemName} is not available in the lab.`);
                } else {
                    selectedChem.formula = formula;
                    console.log(`${chemName} has been assigned the formula ${formula}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (let chemObject of lab) {
        if (!!chemObject.formula) {
            console.log(`Chemical: ${chemObject.chemical}, Quantity: ${chemObject.quantity}, Formula: ${chemObject.formula}`);
        } else {
            console.log(`Chemical: ${chemObject.chemical}, Quantity: ${chemObject.quantity}`);
        }
    }
}

experimentation(['4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']
);

experimentation(['3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'Mix # Hydrogen # Chlorine # 50',
    'End']
);