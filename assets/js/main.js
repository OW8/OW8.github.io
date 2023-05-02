// Add event listener for scrolling effect on the navbar
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
  
  // Smooth scrolling for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  