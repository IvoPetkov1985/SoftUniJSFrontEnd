function solve() {
    const addButtons = document.querySelectorAll("button.add-product");
    const areaElement = document.querySelector("textarea");
    const checkOutButton = document.querySelector("button.checkout");

    const addButtonsAsArr = Array.from(addButtons);

    const purchasedProducts = [];
    let totalPrice = 0;

    for (const addButton of addButtonsAsArr) {
        addButton.addEventListener("click", () => {
            const productName = addButton.parentElement.parentElement.querySelector(".product-title").textContent;

            if (!purchasedProducts.includes(productName)) {
                purchasedProducts.push(productName);
            }

            const productPrice = Number(addButton.parentElement.parentElement.querySelector(".product-line-price").textContent);
            totalPrice += productPrice;
            areaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    }

    checkOutButton.addEventListener("click", () => {
        areaElement.value += `You bought ${purchasedProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;

        const allButtons = document.querySelectorAll("button");

        for (const button of allButtons) {
            button.setAttribute("disabled", "disabled");
        }
    });
}