// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");
// const icon = hamburger.querySelector("i");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   icon.classList.toggle("fa-bars");
//   icon.classList.toggle("fa-times");
// });


  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const icon = hamburger.querySelector("i");

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
  });



const roles = ["Youtuber", "Web Designer", "Freelancer", "Web Developer", "Content Creator"];
  const typingText = document.getElementById('typing-text');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        isDeleting = true;
        delay = 1000; // Pause at full word
      } else {
        delay = 150;
      }
    } else {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 500;
      } else {
        delay = 100;
      }
    }
    setTimeout(type, delay);
  }
  type();