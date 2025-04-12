window.addEventListener("load", solve);

function solve() {
    const previewListUl = document.getElementById("preview-list");
    const expensesListUl = document.getElementById("expenses-list");
    const addButton = document.getElementById("add-btn");
    const deleteButton = document.querySelector("#expenses button");
    const expenseInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");

    addButton.addEventListener("click", createExpense);

    deleteButton.addEventListener("click", () => {
        expensesListUl.innerHTML = "";
    });

    function createExpense() {
        const expense = expenseInput.value;
        const amount = amountInput.value;
        const date = dateInput.value;

        if (expense === "" || amount === "" || date === "") {
            return;
        }

        clearInputs();
        const expenseLi = createExpenseHTML(expense, amount, date);
        previewListUl.appendChild(expenseLi);
        addButton.setAttribute("disabled", "disabled");
    }

    function createExpenseHTML(expense, amount, date) {
        const typePar = document.createElement("p");
        typePar.textContent = `Type: ${expense}`;
        const amountPar = document.createElement("p");
        amountPar.textContent = `Amount: ${amount}$`;
        const datePar = document.createElement("p");
        datePar.textContent = `Date: ${date}`;
        const article = document.createElement("article");
        article.appendChild(typePar);
        article.appendChild(amountPar);
        article.appendChild(datePar);

        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.classList.add("btn", "edit");
        const okButton = document.createElement("button");
        okButton.textContent = "ok";
        okButton.classList.add("btn", "ok");
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);

        const liElement = document.createElement("li");
        liElement.classList.add("expense-item");
        liElement.appendChild(article);
        liElement.appendChild(buttonsDiv);

        editButton.addEventListener("click", () => {
            expenseInput.value = expense;
            amountInput.value = amount;
            dateInput.value = date;

            liElement.remove();
            addButton.removeAttribute("disabled");
        });

        okButton.addEventListener("click", () => {
            expensesListUl.appendChild(liElement);
            buttonsDiv.remove();
            addButton.removeAttribute("disabled");
        });

        return liElement;
    }

    function clearInputs() {
        expenseInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
    }
}