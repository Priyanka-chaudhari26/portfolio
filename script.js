const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


  const words = ["Web Developer", "Designer", "Problem Solver"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingText = document.querySelector(".typing-text");

  function typeWord() {
    if (charIndex < words[wordIndex].length) {
      typingText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWord, 100); // typing speed
    } else {
      setTimeout(eraseWord, 2000); // pause before erasing
    }
  }

  function eraseWord() {
    if (charIndex > 0) {
      typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseWord, 50); // erasing speed
    } else {
      wordIndex = (wordIndex + 1) % words.length; // next word
      setTimeout(typeWord, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    typeWord();
  });

