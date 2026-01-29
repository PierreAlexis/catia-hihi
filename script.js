const messages = [
    "Tu es sûre?",
    "Vraiment sûre??",
    "Haleineuse va",
    "Allez bb stp...",
    "Trouduc",
    "Si tu dis non, Je vais être triste...",
    "OH DIS OUI CARALHO",
    "FODA-SE CLIQUE SUR OUI!!!!",
    "Bon ok, je te demande plus...",
    "Je rigole, dis oui wesh ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
