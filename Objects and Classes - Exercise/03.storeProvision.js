function storeProvision(stock, order) {
    let store = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let quantity = Number(stock[i + 1]);
        store[productName] = quantity;
    }

    for (let i = 0; i < order.length; i += 2) {
        let productName = order[i];
        let quantity = Number(order[i + 1]);

        if (store.hasOwnProperty(productName)) {
            store[productName] += quantity;
        } else {
            store[productName] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);

function solve(products, delivery) {
    let store = {};
    filling(products);
    filling(delivery);

    Object.entries(store)
        .forEach(p => console.log(`${p[0]} -> ${p[1]}`));

    function filling(array) {
        for (let i = 0; i < array.length; i += 2) {
            let productName = array[i];
            let productQuantity = Number(array[i + 1]);

            if (store.hasOwnProperty(productName)) {
                store[productName] += productQuantity;
            } else {
                store[productName] = productQuantity;
            }
        }
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);