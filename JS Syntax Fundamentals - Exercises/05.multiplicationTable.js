function multiplicationTable(inputNumber) {
    const maxMultiplier = 10;

    for (let i = 1; i <= maxMultiplier; i++) {
        const product = inputNumber * i;
        console.log(`${inputNumber} X ${i} = ${product}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);
multiplicationTable(12);