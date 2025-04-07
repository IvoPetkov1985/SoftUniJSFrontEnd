const baseURL = "http://localhost:3030/jsonstore/games";

const loadButton = document.getElementById("load-games");
const addGameButton = document.getElementById("add-game");
const editGameButton = document.getElementById("edit-game");

const nameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

const gamesListDiv = document.getElementById("games-list");

loadButton.addEventListener("click", loadGames);
addGameButton.addEventListener("click", addGame);
editGameButton.addEventListener("click", editGame);

async function addGame() {
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, type, players })
    });

    await loadGames();
}

async function editGame() {
    const gameId = editGameButton.getAttribute("data-game-id");
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    const editURL = `${baseURL}/${gameId}`;

    await fetch(editURL, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, type, players, _id: gameId })
    });

    editGameButton.removeAttribute("data-game-id");
    editGameButton.setAttribute("disabled", "disabled");
    addGameButton.removeAttribute("disabled");
    await loadGames();
}

async function loadGames() {
    gamesListDiv.innerHTML = "";

    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const games = Object.values(responseAsJson);

    const gamesDivs = games.map(g => createGameDiv(g.name, g.type, g.players, g._id));

    gamesListDiv.append(...gamesDivs);
}

function createGameDiv(name, type, players, id) {
    const pName = document.createElement("p");
    pName.textContent = name;

    const pType = document.createElement("p");
    pType.textContent = type;

    const pPlayers = document.createElement("p");
    pPlayers.textContent = players;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.appendChild(pName);
    contentDiv.appendChild(pType);
    contentDiv.appendChild(pPlayers);

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";

    changeButton.addEventListener("click", () => {
        nameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        editGameButton.removeAttribute("disabled");
        editGameButton.setAttribute("data-game-id", id);
        addGameButton.setAttribute("disabled", "disabled");
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", async () => {
        const deleteURL = `${baseURL}/${id}`;

        await fetch(deleteURL, {
            method: "DELETE"
        });

        await loadGames();
    });

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-container");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const gameDiv = document.createElement("div");
    gameDiv.classList.add("board-game");
    gameDiv.appendChild(contentDiv);
    gameDiv.appendChild(buttonsDiv);

    return gameDiv;
}

function clearInputs() {
    nameInput.value = "";
    typeInput.value = "";
    playersInput.value = "";
}