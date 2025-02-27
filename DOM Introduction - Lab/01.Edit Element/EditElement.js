function editElement(element, oldText, newText) {
    let text = element.textContent;
    text = text.replaceAll(oldText, newText);
    element.textContent = text;
}

function editElement(element, originanText, replaceText) {
    let text = element.innerText;
    let pattern = new RegExp(originanText, "g");
    text = text.replace(pattern, replaceText);
    element.innerText = text;
}

function editElement(elementRef, oldText, newText) {
    let text = elementRef.textContent;

    while (text.includes(oldText)) {
        text = text.replace(oldText, newText);
    }

    elementRef.textContent = text;
}