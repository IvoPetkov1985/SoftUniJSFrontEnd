function fruits(species, weightInG, pricePerKilo) {
    let weightInKilo = weightInG / 1000;
    let priceToPay = weightInKilo * pricePerKilo;
    console.log(`I need $${priceToPay.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${species}.`);
}

fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);