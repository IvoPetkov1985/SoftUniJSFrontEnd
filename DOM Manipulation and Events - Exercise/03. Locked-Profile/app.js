function lockedProfile() {
    const profilesCollection = document.querySelectorAll("div.profile");

    for (const profile of profilesCollection) {
        const buttonElement = profile.querySelector("button");

        buttonElement.addEventListener("click", (e) => {
            const unlockRadioButton = e.currentTarget.parentElement
                .querySelector("input[type=radio][value=unlock]");

            if (!unlockRadioButton.checked) {
                return;
            }

            const moreInfoDiv = e.currentTarget.parentElement
                .querySelector("div:last-of-type");

            if (buttonElement.textContent === "Show more") {
                moreInfoDiv.style.display = "block";
                buttonElement.textContent = "Hide it";
            } else if (buttonElement.textContent === "Hide it") {
                moreInfoDiv.style.display = "none";
                buttonElement.textContent = "Show more";
            }
        });
    }
}