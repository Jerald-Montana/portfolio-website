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
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute('data-percent');
            });
        } else {
            fills.forEach(fill => {
                fill.style.width = '0%';
            });
        }
    });
}, { threshold: 0.5 });

// Observe the section containing skills
const skillSection = document.querySelector('#skills');
if (skillSection) {
    observer.observe(skillSection);
}



document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        const card = this.closest('.experience-card');
        card.classList.toggle('active');

        // Optional: Close other cards
        document.querySelectorAll('.experience-card').forEach(other => {
            if (other !== card) {
                other.classList.remove('active');
            }
        });
    });
});


function scrollLeft(btn) {
    const container = btn.closest('.life-category').querySelector('.media-scroll');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(btn) {
    const container = btn.closest('.life-category').querySelector('.media-scroll');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}



function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// On load, check saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById("themeSwitch").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
});

