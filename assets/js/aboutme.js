document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skill-animate');
          entry.target.style.width = entry.target.getAttribute('data-skill-level');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.6 // Trigger when 60% of the element is in the viewport
    });
  
    const skillElements = document.querySelectorAll('.skill');
    skillElements.forEach(el => {
      // Set the initial width to 0 and read the final width from data attribute
      el.style.width = '0%';
      el.setAttribute('data-skill-level', el.textContent);
      el.textContent = ''; // Optional: remove the text if you want the percentage to be shown only in the bar
      
      observer.observe(el);
    });
  });
  