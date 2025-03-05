document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const productButtons = document.getElementsByClassName("add-product");
    const outputArea = document.getElementsByTagName("textarea")[0];
    const submitButtonElement = document.querySelector("button.checkout");

    const purchasedProductObjs = [];

    for (const productButton of productButtons) {
        productButton.addEventListener("click", (e) => {
            const productName = e.target.parentElement.parentElement.querySelector("div.product-title").textContent;

            const productPrice = Number(e.target.parentElement.parentElement.querySelector("div.product-line-price").textContent);

            const productObj = { productName, productPrice };
            purchasedProductObjs.push(productObj);
            outputArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    }

    submitButtonElement.addEventListener("click", () => {
        const purchasedProductsNames = Array.from(new Set(purchasedProductObjs.map(obj => obj.productName)));
        const totalSum = purchasedProductObjs.reduce((sum, price) => {
            return sum += price.productPrice;
        }, 0);

        outputArea.value += `You bought ${purchasedProductsNames.join(", ")} for ${totalSum.toFixed(2)}.`;

        const allButtons = document.querySelectorAll("button");
        allButtons.forEach(b => b.setAttribute("disabled", "disabled"));
    });
}