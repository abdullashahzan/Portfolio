document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

const texts = [
    "an ambitious and passionate CE student",
    "a full stack web developer",
    "Machine learning engineer",
    "full-time python developer"
];

let currentIndex = 0;

function updateText() {
    const textElement = document.getElementById('text-loop');
    textElement.textContent = texts[currentIndex];
    if (currentIndex >= (texts.length-1)) {currentIndex = 0}
    else {currentIndex += 1}
}

updateText();

// Keep interval same as CSS animation duration
setInterval(updateText, 3000);