export function tryCatchMessage(type, message, target) {
    const messageContainer = document.querySelector(target);
    messageContainer.innerHTML = `<div class="message error-message"><p>${message}, please try again</p></div>`;
}