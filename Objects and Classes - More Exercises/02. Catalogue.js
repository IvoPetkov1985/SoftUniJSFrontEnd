function catalogue(input) {
    let products = {};

    for (let infoLine of input) {
        let [product, price] = infoLine.split(" : ");
        price = Number(price);

        products[product] = price;
    }

    let entries = Object
        .entries(products)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter = entries[0][0][0];
    console.log(firstLetter);

    for (let [name, price] of entries) {
        let startingLetter = name[0];

        if (startingLetter !== firstLetter) {
            firstLetter = startingLetter;
            console.log(startingLetter);
        }
        console.log(`  ${name}: ${price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);