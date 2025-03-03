function solve() {
    const townsListElements = document.querySelectorAll("ul li");
    const searchTextElement = document.getElementById("searchText");
    const resultDivElement = document.getElementById("result");

    const searchedText = searchTextElement.value;
    let matches = 0;

    for (const townElement of townsListElements) {
        townElement.style.textDecoration = "";
        townElement.style.fontWeight = "";
        const currentTown = townElement.textContent.toLowerCase();

        if (searchedText && currentTown.includes(searchedText.toLowerCase())) {
            townElement.style.textDecoration = "underline";
            townElement.style.fontWeight = "bold";
            matches++;
        }
    }

    resultDivElement.textContent = `${matches} matches found`;
    searchTextElement.value = "";
}