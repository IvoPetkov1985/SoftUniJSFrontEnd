document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertionsFromSeconds = {
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: 86400
    };

    const daysInput = document.getElementById("days-input");
    const hoursInput = document.getElementById("hours-input");
    const minutesInput = document.getElementById("minutes-input");
    const secondsInput = document.getElementById("seconds-input");

    const formElements = document.querySelectorAll("form");

    formElements.forEach(fe => {
        fe.addEventListener("submit", (e) => {
            e.preventDefault();

            const currentInput = e.currentTarget.querySelector("input[type=number]");
            const currentValue = Number(currentInput.value);

            if (currentValue < 1) {
                return;
            }

            const key = currentInput.getAttribute("id").split("-")[0];
            const multiplyValue = convertionsFromSeconds[key];
            updateValues(currentValue * multiplyValue);
        });
    });

    function updateValues(seconds) {
        daysInput.value = Number(seconds / convertionsFromSeconds.days).toFixed(2);
        hoursInput.value = Number(seconds / convertionsFromSeconds.hours).toFixed(2);
        minutesInput.value = Number(seconds / convertionsFromSeconds.minutes).toFixed(2);
        secondsInput.value = Number(seconds / convertionsFromSeconds.seconds).toFixed(2);
    }
}