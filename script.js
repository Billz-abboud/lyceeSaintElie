document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navItems.forEach(item => {
    item.addEventListener('click', function (event) {
      // Prevent other actions from triggering
      event.stopPropagation();

      // Remove 'active' class from other nav items to close other submenus
      navItems.forEach(navItem => {
        if (navItem !== item) {
          navItem.classList.remove('active');
        }
      });

      // Toggle 'active' class on the clicked nav item
      item.classList.toggle('active');

      // Toggle submenu visibility for the clicked item
      const submenu = item.querySelector('.nav-submenu');
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // Handle navigation toggle button for mobile
  navToggle.addEventListener('click', function () {
    // Toggle 'active' class on the navigation list to show/hide it
    navList.classList.toggle('active');

    // Change the toggle icon between hamburger (three dashes) and close (X) icon
    const navToggleIcon = document.querySelector('.nav-toggle-icon');
    const navToggleIconClose = document.querySelector('.nav-toggle-icon-close');
    if (navList.classList.contains('active')) {
      navToggleIcon.style.display = 'block';
      navToggleIconClose.style.display = 'block';
    } else {
      navToggleIcon.style.display = 'block';
      navToggleIconClose.style.display = 'none';
    }
  });

  // Close the navigation when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
      navList.classList.remove('active');
      const navToggleIcon = document.querySelector('.nav-toggle-icon');
      const navToggleIconClose = document.querySelector('.nav-toggle-icon-close');
      navToggleIcon.style.display = 'block';
      navToggleIconClose.style.display = 'none';
    }
  });
});



  const carouselContainer = document.querySelector('.carousel-containertwoimages');

let isDown = false;
let startX;
let scrollLeft;

carouselContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  carouselContainer.classList.add('active');
  startX = e.pageX - carouselContainer.offsetLeft;
  scrollLeft = carouselContainer.scrollLeft;
});

carouselContainer.addEventListener('mouseleave', () => {
  isDown = false;
  carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mouseup', () => {
  isDown = false;
  carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop the function from running
  e.preventDefault();
  const x = e.pageX - carouselContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  carouselContainer.scrollLeft = scrollLeft - walk;
});
