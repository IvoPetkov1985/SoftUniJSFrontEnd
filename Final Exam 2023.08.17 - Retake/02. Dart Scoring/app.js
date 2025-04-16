window.addEventListener("load", solve);

function solve() {
    const sureListUl = document.getElementById("sure-list");
    const scoreBoardListUl = document.getElementById("scoreboard-list");
    const playerInput = document.getElementById("player");
    const scoreInput = document.getElementById("score");
    const roundInput = document.getElementById("round");
    const addButton = document.getElementById("add-btn");
    const clearButton = document.querySelector("#players-container button.clear")

    addButton.addEventListener("click", addGame);
    clearButton.addEventListener("click", clearAllGames);

    function addGame(e) {
        const playerName = playerInput.value;
        const score = scoreInput.value;
        const round = roundInput.value;

        if (!playerName || !score || !round) {
            return;
        }

        clearAllInputs();
        const gameLiElement = createGameLi(playerName, score, round);
        sureListUl.appendChild(gameLiElement);
        e.currentTarget.setAttribute("disabled", "disabled");
    }

    function createGameLi(name, score, round) {
        const playerNamePar = document.createElement("p");
        playerNamePar.textContent = name;
        const scorePar = document.createElement("p");
        scorePar.textContent = `Score: ${score}`;
        const roundPar = document.createElement("p");
        roundPar.textContent = `Round: ${round}`;
        const articleElement = document.createElement("article");
        articleElement.appendChild(playerNamePar);
        articleElement.appendChild(scorePar);
        articleElement.appendChild(roundPar);

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "edit");
        editButton.textContent = "edit";
        editButton.addEventListener("click", editGame);
        const okButton = document.createElement("button");
        okButton.classList.add("btn", "ok");
        okButton.textContent = "ok";
        okButton.addEventListener("click", confirmGame);

        const dartLiElement = document.createElement("li");
        dartLiElement.classList.add("dart-item");
        dartLiElement.appendChild(articleElement);
        dartLiElement.appendChild(editButton);
        dartLiElement.appendChild(okButton);

        function editGame() {
            playerInput.value = name;
            scoreInput.value = score;
            roundInput.value = round;

            addButton.removeAttribute("disabled");
            dartLiElement.remove();
        }

        function confirmGame() {
            dartLiElement.removeChild(editButton);
            dartLiElement.removeChild(okButton);
            addButton.removeAttribute("disabled");
            scoreBoardListUl.appendChild(dartLiElement);
        }

        return dartLiElement;
    }

    function clearAllGames() {
        window.location.reload();
    }

    function clearAllInputs() {
        playerInput.value = "";
        scoreInput.value = "";
        roundInput.value = "";
    }
}