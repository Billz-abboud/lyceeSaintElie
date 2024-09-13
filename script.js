document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove 'active' class from all items
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle 'active' class on the clicked item
      item.classList.toggle('active');
      
      // For mobile, toggle the nav menu visibility
      if (window.innerWidth <= 768) {
        navList.classList.toggle('active');
        navToggle.classList.toggle('active');
      }
    });
  });

  // Handle mobile menu toggle button
  navToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
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
