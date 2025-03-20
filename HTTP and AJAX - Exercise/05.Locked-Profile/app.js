async function lockedProfile() {
    const baseURL = "http://localhost:3030/jsonstore/advanced/profiles";

    const mainElement = document.getElementById("main");
    mainElement.innerHTML = "";

    const profilesRequest = await fetch(baseURL);
    const profilesObjs = await profilesRequest.json();
    const arrayOfProfiles = Object.values(profilesObjs);

    let profileCounter = 1;

    for (const profileObj of arrayOfProfiles) {
        const divEl = document.createElement("div");
        divEl.classList.add("profile");

        const divElContent = `<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${profileCounter}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${profileCounter}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${profileCounter}Username" value="${profileObj.username}" disabled readonly />
				<div class="user${profileCounter}Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${profileCounter}Email" value="${profileObj.email}" disabled readonly />
					<label>Age:</label>
					<input type="number" name="user${profileCounter}Age" value="${profileObj.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
            `
        divEl.innerHTML = divElContent;
        divEl.querySelector("div").style.display = "none";
        mainElement.appendChild(divEl);

        const toggleButton = divEl.querySelector("button");
        const unlockCheckbox = divEl.querySelector("input[type=radio][value=unlock]");

        toggleButton.addEventListener("click", () => {
            if (!unlockCheckbox.checked) {
                return;
            }

            if (toggleButton.textContent === "Show more") {
                divEl.querySelector("div").style.display = "block";
                toggleButton.textContent = "Hide it";
            } else if (toggleButton.textContent === "Hide it") {
                divEl.querySelector("div").style.display = "none";
                toggleButton.textContent = "Show more";
            }
        });

        profileCounter++;
    }
}