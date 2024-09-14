document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  // Handle nav item click to toggle active class and submenu
  navItems.forEach(item => {
    item.addEventListener('click', function (event) {
      // Prevent default action if clicking a link
      if (event.target.closest('.nav-link')) {
        return;
      }

      // Toggle 'active' class on the clicked item
      item.classList.toggle('active');

      // Remove 'active' class from other items
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle submenu visibility
      const submenu = item.querySelector('.nav-submenu');
      if (submenu) {
        submenu.classList.toggle('show');
      }
    });
  });

  // Handle mobile menu toggle button
  navToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  // Ensure clicking a link in the nav does not close the menu on mobile
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Check if the menu is already open and prevent hiding it
      if (window.innerWidth <= 768) {
        event.stopPropagation(); // Prevent event from bubbling up to document
      }
    });
  });

  // Optional: Close the active menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
      navList.classList.remove('active');
    }
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
