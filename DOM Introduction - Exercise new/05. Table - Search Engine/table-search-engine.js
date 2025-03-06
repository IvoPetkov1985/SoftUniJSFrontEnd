function solve() {
    const tBodyRows = document.querySelectorAll("table tbody tr");
    const searchInputElement = document.getElementById("searchField");

    const searchedText = searchInputElement.value;

    for (const bodyRow of tBodyRows) {
        bodyRow.classList.remove("select");

        if (searchedText && bodyRow.textContent.toLowerCase().includes(searchedText.toLowerCase())) {
            bodyRow.className = "select";
        }
    }

    searchInputElement.value = "";
}