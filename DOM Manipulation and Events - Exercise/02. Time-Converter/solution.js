function attachEventsListeners() {

    const daysInput = document.getElementById("days");
    const daysButton = document.getElementById("daysBtn");
    const hoursInput = document.getElementById("hours");
    const hoursButton = document.getElementById("hoursBtn");
    const minutesInput = document.getElementById("minutes");
    const minutesButton = document.getElementById("minutesBtn");
    const secondsInput = document.getElementById("seconds");
    const secondsButton = document.getElementById("secondsBtn");

    daysButton.addEventListener("click", daysConv);
    hoursButton.addEventListener("click", hoursConv);
    minutesButton.addEventListener("click", minutesConv);
    secondsButton.addEventListener("click", secondsConv);

    function daysConv() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function hoursConv() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function minutesConv() {
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
        secondsInput.value = minutesInput.value * 60;
    }

    function secondsConv() {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }
}