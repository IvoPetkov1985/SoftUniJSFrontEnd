function cookingByNumbers(numAsString, ...operations) {
    let num = Number(numAsString);

    for (let operation of operations) {
        switch (operation) {
            case "chop":
                num /= 2;
                break;

            case "dice":
                num = Math.sqrt(num);
                break;

            case "spice":
                num += 1;
                break;

            case "bake":
                num *= 3;
                break;

            case "fillet":
                num -= num * 0.2;
                break;
        }

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function solve(numAsString, ...operations) {
    let number = Number(numAsString);

    let calc = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2
    }

    for (let oper of operations) {
        number = calc[oper](number);
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');