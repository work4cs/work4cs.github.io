// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  } else {
    console.log("Menu toggle or nav list not found.");  // Error handling for missing elements
  }
  // Close the menu when a nav link is clicked (for one-page navigation)
  document.querySelectorAll('.nav-list').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
  // Scroll reveal animations for elements with .fade-in class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  // Parallax scrolling effect for hero background
  const heroSection = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (heroSection) {
      const offset = window.pageYOffset;
      // Move background at half the scroll speed
      heroSection.style.backgroundPositionY = `${offset * 0.5}px`;
    }
  });
});
