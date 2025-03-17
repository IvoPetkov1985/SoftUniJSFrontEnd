function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/messenger";

    const messageArea = document.getElementById("messages");
    const refreshButton = document.getElementById("refresh");
    const nameInputEl = document.querySelector("#controls input[name=author]");
    const contentInputEl = document.querySelector("#controls input[name=content]");
    const sendButton = document.getElementById("submit");

    sendButton.addEventListener("click", async () => {
        const authorName = nameInputEl.value;
        const msgText = contentInputEl.value;
        const isValid = authorName !== "" && msgText !== "";

        if (isValid) {

            const messageObj = {
                author: authorName,
                content: msgText
            };

            await fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(messageObj)
            });
        }
    });

    refreshButton.addEventListener("click", async () => {
        messageArea.value = "";

        const msgResponse = await fetch(baseURL);
        const messages = await msgResponse.json();
        const arrayOfMessages = Object.values(messages);
        const messagesToDisplay = [];

        for (const message of arrayOfMessages) {
            messagesToDisplay.push(`${message.author}: ${message.content}`);
            messageArea.value = messagesToDisplay.join("\n");
        }
    });
}

attachEvents();