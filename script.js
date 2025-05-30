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

window.addEventListener('scroll', function () {
  const topNavbar = document.querySelector('.top-navbar');
  const secondNavbar = document.querySelector('.navbar-secound');

  if (window.scrollY > 10) {
    if (topNavbar) topNavbar.style.display = 'none'; // Hide on all screen sizes
    secondNavbar.classList.add('fixed-top', 'shadow-sm');
  } else {
    if (topNavbar) topNavbar.style.display = ''; // Revert to original display
    secondNavbar.classList.remove('fixed-top', 'shadow-sm');
  }
});


// const roles = ["Youtuber", "Web Designer", "Freelancer", "Web Developer", "Content Creator"];
//   const typingText = document.getElementById('typing-text');
//   let roleIndex = 0;
//   let charIndex = 0;
//   let isDeleting = false;
//   let delay = 150;

//   function type() {
//     const currentRole = roles[roleIndex];
//     if (!isDeleting) {
//       typingText.textContent = currentRole.substring(0, charIndex + 1);
//       charIndex++;
//       if (charIndex === currentRole.length) {
//         isDeleting = true;
//         delay = 1000; // Pause at full word
//       } else {
//         delay = 150;
//       }
//     } else {
//       typingText.textContent = currentRole.substring(0, charIndex - 1);
//       charIndex--;
//       if (charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//         delay = 500;
//       } else {
//         delay = 100;
//       }
//     }
//     setTimeout(type, delay);
//   }
//   type();


  const roles = ["Front-end-Developer","Web Developer", "UI/UX Designer", "Freelancer", "Problem Solver"];
    const typingSpan = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingSpan.textContent = currentRole.substring(0, charIndex--);
      } else {
        typingSpan.textContent = currentRole.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause after typing word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 300); // short pause before next word
      } else {
        setTimeout(type, isDeleting ? 50 : 100); // typing speed
      }
    }

    document.addEventListener("DOMContentLoaded", type);






 const cards = [
    { img: 'img/s1.jpg', text: 'Slide 1 Card 1' },
    { img: 'img/s2.jpg', text: 'Slide 1 Card 2' },
    { img: 'img/s3.jpg', text: 'Slide 2 Card 1' },
    { img: 'img/s4.jpg', text: 'Slide 2 Card 2' },
    { img: 'img/s5.jpg', text: 'Slide 3 Card 1' },
    { img: 'img/s6.jpg', text: 'Slide 3 Card 2' }
  ];

  const isMobile = window.innerWidth < 768;
  const perSlide = isMobile ? 1 : 2;

  const carouselInner = document.getElementById('carouselInner');
  const indicators = document.getElementById('carouselIndicators');

  let slideCount = Math.ceil(cards.length / perSlide);

  for (let i = 0; i < slideCount; i++) {
    // Create carousel-item
    const item = document.createElement('div');
    item.className = 'carousel-item' + (i === 0 ? ' active' : '');
    
    const row = document.createElement('div');
    row.className = 'row g-3';

    for (let j = 0; j < perSlide; j++) {
      const cardIndex = i * perSlide + j;
      if (cardIndex >= cards.length) break;

      const col = document.createElement('div');
      col.className = isMobile ? 'col-12' : 'col-6';

      col.innerHTML = `
        <div class="card custom-banner position-relative overflow-hidden border-0">
          <img src="${cards[cardIndex].img}" class="w-100 h-100" style="object-fit:cover;" alt="Card ${cardIndex + 1}">
          <p class="position-absolute top-50 start-50 translate-middle text-white text-center px-3">
            ${cards[cardIndex].text}
          </p>
        </div>
      `;

      row.appendChild(col);
    }

    item.appendChild(row);
    carouselInner.appendChild(item);

    // Add indicator
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#bannerCarousel');
    indicator.setAttribute('data-bs-slide-to', i);
    if (i === 0) {
      indicator.className = 'active';
      indicator.setAttribute('aria-current', 'true');
    }
    indicators.appendChild(indicator);
  }