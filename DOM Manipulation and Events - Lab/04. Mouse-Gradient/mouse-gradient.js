function attachGradientEvents() {
    const resultDivElement = document.getElementById("result");
    const hoverDivElement = document.getElementById("gradient");

    hoverDivElement.addEventListener("mousemove", (e) => {

        const percentage = Math.floor(e.offsetX / hoverDivElement.clientWidth * 100);
        resultDivElement.textContent = `${percentage}%`;
    });

    hoverDivElement.addEventListener("mouseout", () => {
        resultDivElement.textContent = "";
    });
}