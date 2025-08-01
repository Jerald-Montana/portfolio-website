const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Close menu if clicking outside
document.addEventListener('click', (e) => {
    const isClickInside = navLinks.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside) {
        navLinks.classList.remove('active');
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const fills = entry.target.querySelectorAll('.skill-fill');

        if (entry.isIntersecting) {
            // Animate bars
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute('data-percent');
            });
        } else {
            // Reset bars when out of view
            fills.forEach(fill => {
                fill.style.width = '0%';
            });
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('#about');
if (aboutSection) observer.observe(aboutSection);