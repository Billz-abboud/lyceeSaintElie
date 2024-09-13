document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navItems = document.querySelectorAll('.nav-item');

  // Toggle navigation list visibility on mobile
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Handle submenu toggles for mobile
  navItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    const navSubmenu = item.querySelector('.nav-submenu');

    navLink.addEventListener('click', (e) => {
      // Prevent default navigation action for links with submenus
      if (navSubmenu) {
        e.preventDefault();

        // Toggle submenu visibility
        item.classList.toggle('active');
      }
    });
  });
});
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: 'smooth'
  });
});

// Scroll the carousel to the left
document.getElementById("scrollLeft").onclick = function() {
    document.querySelector(".carousel").scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };
  
  // Scroll the carousel to the right
  document.getElementById("scrollRight").onclick = function() {
    document.querySelector(".carousel").scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };