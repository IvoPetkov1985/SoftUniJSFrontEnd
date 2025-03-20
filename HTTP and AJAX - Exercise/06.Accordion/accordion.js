async function solution() {
    const articlesListURL = "http://localhost:3030/jsonstore/advanced/articles/list";

    const mainSection = document.getElementById("main");

    const articlesRequest = await fetch(articlesListURL);
    const articlesObjs = await articlesRequest.json();

    for (const articleObj of articlesObjs) {
        const accordionDiv = document.createElement("div");
        accordionDiv.classList.add("accordion");

        const headDiv = document.createElement("div");
        headDiv.classList.add("head");

        const spanEl = document.createElement("span");
        spanEl.textContent = articleObj.title;
        const buttonEl = document.createElement("button");
        buttonEl.setAttribute("id", articleObj._id);
        buttonEl.textContent = "More";

        headDiv.appendChild(spanEl);
        headDiv.appendChild(buttonEl);

        const extraDiv = document.createElement("div");
        extraDiv.classList.add("extra");

        const par = document.createElement("p");
        extraDiv.appendChild(par);

        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(extraDiv);
        mainSection.appendChild(accordionDiv);

        buttonEl.addEventListener("click", async () => {
            const articleInfoURL = `http://localhost:3030/jsonstore/advanced/articles/details/${buttonEl.id}`;

            const articleInfoRequest = await fetch(articleInfoURL);
            const currentArticleObj = await articleInfoRequest.json();

            extraDiv.querySelector("p").textContent = currentArticleObj.content;

            if (buttonEl.textContent === "More") {
                extraDiv.style.display = "block";
                buttonEl.textContent = "Less";
            } else if (buttonEl.textContent === "Less") {
                extraDiv.style.display = "none";
                buttonEl.textContent = "More";
            }
        });
    }
}

solution();