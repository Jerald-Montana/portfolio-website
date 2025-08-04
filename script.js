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




if ('IntersectionObserver' in window) {
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
    }, { threshold: 0.2 });

    const skillSection = document.querySelector('#skills');
    if (skillSection) observer.observe(skillSection);
} else {
    // Fallback: Load all skill bars immediately
    document.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.getAttribute('data-percent');
    });
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





document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');

        let slideWidth = carousel.offsetWidth;

        // Set initial styles
        track.style.transition = 'transform 0.8s ease-in-out';
        track.style.transform = `translateX(0)`;

        // Recalculate width on resize (for responsiveness)
        window.addEventListener("resize", () => {
            slideWidth = carousel.offsetWidth;
        });

        setInterval(() => {
            track.style.transition = 'transform 0.8s ease-in-out';
            track.style.transform = `translateX(-${slideWidth}px)`;

            // After animation finishes, move first item to end & reset position
            setTimeout(() => {
                const firstItem = track.querySelector('.carousel-item');
                track.appendChild(firstItem);
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
            }, 800); // Must match CSS transition duration (0.8s)
        }, 4000);
    });
});







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





const form = document.querySelector(".feedback-form");
const editable = document.getElementById("editableInput");
const hiddenInput = document.getElementById("hiddenMessage");

form.addEventListener("submit", function (e) {
    hiddenInput.value = editable.innerText.trim();
});
