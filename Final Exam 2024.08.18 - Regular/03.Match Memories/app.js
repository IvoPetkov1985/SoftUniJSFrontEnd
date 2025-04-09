const baseURL = "http://localhost:3030/jsonstore/matches";

const addMatchButton = document.getElementById("add-match");
const editMatchButton = document.getElementById("edit-match");
const loadMatchesButton = document.getElementById("load-matches");
const hostTeamInput = document.getElementById("host");
const scoreInput = document.getElementById("score");
const guestTeamInput = document.getElementById("guest");
const matchListUl = document.getElementById("list");

loadMatchesButton.addEventListener("click", loadMatches);
addMatchButton.addEventListener("click", addMatch);
editMatchButton.addEventListener("click", editMatch);

async function addMatch() {
    const host = hostTeamInput.value;
    const score = scoreInput.value;
    const guest = guestTeamInput.value;

    if (!host || !score || !guest) {
        return;
    }

    const matchObject = { host, score, guest };
    clearInputs();

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(matchObject)
    });

    if (!response.ok) {
        return;
    }

    await loadMatches();
}

async function editMatch() {
    const host = hostTeamInput.value;
    const score = scoreInput.value;
    const guest = guestTeamInput.value;

    if (!host || !score || !guest) {
        return;
    }

    const matchId = editMatchButton.getAttribute("data-match-id");
    const editMatchObject = { host, score, guest, _id: matchId };
    clearInputs();

    const response = await fetch(`${baseURL}/${matchId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editMatchObject)
    });

    if (!response.ok) {
        return;
    }

    await loadMatches();

    editMatchButton.removeAttribute("data-match-id");
    editMatchButton.setAttribute("disabled", "disabled");
    addMatchButton.removeAttribute("disabled");
}

async function loadMatches() {
    matchListUl.innerHTML = "";
    const response = await fetch(baseURL);
    const responseAsJson = await response.json();
    const matchesAsObjects = Object.values(responseAsJson);

    matchesAsObjects.forEach(match => {
        matchListUl.appendChild(createMatchLiElement(match));
    });
}

function createMatchLiElement({ host, score, guest, _id }) {
    const hostPar = document.createElement("p");
    hostPar.textContent = host;
    const scorePar = document.createElement("p");
    scorePar.textContent = score;
    const guestPar = document.createElement("p");
    guestPar.textContent = guest;
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    infoDiv.appendChild(hostPar);
    infoDiv.appendChild(scorePar);
    infoDiv.appendChild(guestPar);

    const changeButton = document.createElement("button");
    changeButton.textContent = "Change";
    changeButton.classList.add("change-btn");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("btn-wrapper");
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const matchLi = document.createElement("li");
    matchLi.classList.add("match");
    matchLi.appendChild(infoDiv);
    matchLi.appendChild(buttonsDiv);

    changeButton.addEventListener("click", () => {
        hostTeamInput.value = host;
        scoreInput.value = score;
        guestTeamInput.value = guest;

        matchLi.remove();
        addMatchButton.setAttribute("disabled", "disabled");
        editMatchButton.removeAttribute("disabled");
        editMatchButton.setAttribute("data-match-id", _id);
    });

    deleteButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${_id}`, {
            method: "DELETE"
        });

        matchLi.remove();
        await loadMatches();
    });

    return matchLi;
}

function clearInputs() {
    hostTeamInput.value = "";
    scoreInput.value = "";
    guestTeamInput.value = "";
}