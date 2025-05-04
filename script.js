
const cards = document.querySelectorAll('.stack-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // Deaktiviere andere Sektionen
      cards.forEach(card => {
        if (card !== entry.target) {
          card.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

cards.forEach(card => observer.observe(card));
