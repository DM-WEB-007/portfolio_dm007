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

