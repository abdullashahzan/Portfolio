function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Array of messages to display
const messages = [
  "Abdulla Shahzan.",
  "a data scientist.",
  "a Software engineer.",
  "a developer.",
  "a problem solver."
];

let messageIndex = 0; // Current message index
let charIndex = 0; // Current character index
const typingTextElement = document.getElementById("typing-text");

// Function to simulate typing effect
function type() {
  if (charIndex < messages[messageIndex].length) {
    // Add the next character
    typingTextElement.textContent += messages[messageIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Typing speed (100ms per character)
  } else {
    // Pause before deleting
    setTimeout(erase, 1500);
  }
}

// Function to simulate erasing effect
function erase() {
  if (charIndex > 0) {
    // Remove the last character
    typingTextElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Erasing speed (50ms per character)
  } else {
    // Move to the next message
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(type, 500); // Pause before typing the next message
  }
}

// Start the typing effect
type();
