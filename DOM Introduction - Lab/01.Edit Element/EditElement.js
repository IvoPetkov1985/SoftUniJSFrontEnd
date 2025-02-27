function editElement(element, oldText, newText) {
    let text = element.textContent;
    text = text.replaceAll(oldText, newText);
    element.textContent = text;
}