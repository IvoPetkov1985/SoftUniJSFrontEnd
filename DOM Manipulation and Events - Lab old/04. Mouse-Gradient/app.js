function attachGradientEvents() {
    const hoverElement = document.getElementById("gradient");
    const resultDivElement = document.getElementById("result");

    hoverElement.addEventListener("mousemove", (event) => {
        const persentage = Math.trunc(event.offsetX / hoverElement.clientWidth * 100);
        resultDivElement.textContent = `${persentage}%`;
    });
}