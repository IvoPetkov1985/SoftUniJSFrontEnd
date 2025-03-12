document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeFormElement = document.getElementById("encode");
    const decodeFormElement = document.getElementById("decode");
    const encodeTextarea = encodeFormElement.querySelector("textarea");
    const decodeTextarea = decodeFormElement.querySelector("textarea");

    encodeFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputText = encodeTextarea.value;
        const encoded = inputText.split("").map(ch => String.fromCharCode(ch.charCodeAt(0) + 1)).join("");
        decodeTextarea.value = encoded;
        encodeTextarea.value = "";
    });

    decodeFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const textToDecode = decodeTextarea.value;
        const decoded = textToDecode.split("").map(ch => String.fromCharCode(ch.charCodeAt(0) - 1)).join("");
        decodeTextarea.value = decoded;
    });
}