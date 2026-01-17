const messageText = "404 NOT FOUND";
const backText = "BACK TO HOME?";
const messageElement = document.querySelector('.message');
const cursorElement = document.querySelector('.cursor');
let index = 0;

function type(text, element, callback) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => type(text, element, callback), 100); // Adjust typing speed here (in milliseconds)
    } else {
        index = 0; // Reset index for the next text
        if (callback) callback();
    }
}

// Start typing the main message
type(messageText, messageElement, () => {
    // Once the main message is typed, create a new element for the "Back to homepage" link
    const linkElement = document.createElement('div');
    linkElement.style.marginTop = '1rem';
    messageElement.appendChild(linkElement);

    // Start typing the "Back to homepage" text in the new linkElement
    type(backText, linkElement, () => {
        // After typing finishes, make "Back to homepage" a clickable link
        linkElement.innerHTML = `<a href="/" style="color: white; text-decoration: none;"><u>${backText}</u></a>`;
    });
});
