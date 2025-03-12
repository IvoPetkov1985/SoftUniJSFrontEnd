document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputForm = document.getElementById("input");
    const shopForm = document.getElementById("shop");
    const inputTextarea = inputForm.querySelector("textarea");
    const outputTextarea = shopForm.querySelector("textarea");
    const bodyEl = shopForm.querySelector("tbody");

    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputText = inputTextarea.value;
        const furnitureArray = JSON.parse(inputText);

        for (const furniture of furnitureArray) {
            const imgEl = document.createElement("img");
            imgEl.setAttribute("src", furniture.img);
            const imgTd = document.createElement("td");
            imgTd.appendChild(imgEl);

            const namePar = document.createElement("p");
            namePar.textContent = furniture.name;
            const nameTd = document.createElement("td");
            nameTd.appendChild(namePar);

            const pricePar = document.createElement("p");
            pricePar.textContent = furniture.price;
            const priceTd = document.createElement("td");
            priceTd.appendChild(pricePar);

            const factorPar = document.createElement("p");
            factorPar.textContent = furniture.decFactor;
            const factorTd = document.createElement("td");
            factorTd.appendChild(factorPar);

            const inputEl = document.createElement("input");
            inputEl.setAttribute("type", "checkbox");
            const checkTd = document.createElement("td");
            checkTd.appendChild(inputEl);

            const rowEl = document.createElement("tr");
            rowEl.appendChild(imgTd);
            rowEl.appendChild(nameTd);
            rowEl.appendChild(priceTd);
            rowEl.appendChild(factorTd);
            rowEl.appendChild(checkTd);

            bodyEl.appendChild(rowEl);
        }
    });

    shopForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const namesArray = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (const row of bodyEl.children) {
            const checkboxInput = row.querySelector("input[type=checkbox]");
            const name = row.children[1].textContent.trim();
            const price = Number(row.children[2].textContent);
            const decFactor = Number(row.children[3].textContent);

            if (checkboxInput.checked) {
                namesArray.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
            }
        }

        const decFactor = totalDecFactor / namesArray.length;
        outputTextarea.value += `Bought furniture: ${namesArray.join(", ")}\n`;
        outputTextarea.value += `Total price: ${totalPrice}\n`;
        outputTextarea.value += `Average decoration factor: ${decFactor}`
    });
}