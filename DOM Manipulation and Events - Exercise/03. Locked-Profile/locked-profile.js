document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profileDivs = document.querySelectorAll("main div.profile");

    for (const profileDivEl of profileDivs) {
        profileDivEl.addEventListener("click", (e) => {
            if (e.target.nodeName !== "BUTTON") {
                return;
            }

            const unlockButton = e.currentTarget.querySelector(".radio-group input[type=radio]:last-of-type");

            if (!unlockButton.checked) {
                return;
            }

            const moreInfoDiv = e.currentTarget.querySelector(".hidden-fields");
            const toggleButton = e.currentTarget.querySelector("button");

            if (toggleButton.textContent === "Show more") {
                toggleButton.textContent = "Show less";
                moreInfoDiv.style.display = "block";
            } else if (toggleButton.textContent === "Show less") {
                toggleButton.textContent = "Show more";
                moreInfoDiv.style.display = "none";
            }
        });
    }
}