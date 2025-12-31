// Mobile menu toggle - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;
  
  if (burger && nav) {
    // Toggle menu on burger click
    burger.addEventListener('click', function() {
      nav.classList.toggle('header__nav--open');
      
      // Prevent scrolling when menu is open
      if (nav.classList.contains('header__nav--open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (nav.classList.contains('header__nav--open') && 
          !nav.contains(event.target) && 
          !burger.contains(event.target)) {
        nav.classList.remove('header__nav--open');
        body.style.overflow = '';
      }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        body.style.overflow = '';
      }
    });
  }
  
  // Rest of your animation code...
  // Scroll animations
  function animateOnScroll() {
    const elements = document.querySelectorAll('.features__item, .values__item, .dashboard__stat');
    
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }

  // Initialize elements for animation
  const animatedElements = document.querySelectorAll('.features__item, .values__item, .dashboard__stat');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Initial check
  animateOnScroll();
  
  // Add scroll listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Button hover effects
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Image hover effects
  const images = document.querySelectorAll('.intro__image img, .features__image img');
  images.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});