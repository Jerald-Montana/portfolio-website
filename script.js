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





document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Computer Engineer",
        "Quality Assurance Tester",
        "Web Design",
        "Software Hobbyist",
        "PC Builder",
        "Robotics",
        "Student-Athlete"
    ];

    const typewriterElement = document.getElementById("typewriter");
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        let currentPhrase = phrases[phraseIndex];

        if (!deleting) {
            // Typing effect
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                // Wait before deleting
                deleting = true;
                setTimeout(typeEffect, 2000); // ⏱️ Pause after finishing a phrase
                return;
            }
        } else {
            // Deleting effect
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // loop

                setTimeout(typeEffect, 800); // ⏱️ Small pause before typing next phrase
                return;
            }
        }

        // Adjust typing / deleting speed
        setTimeout(typeEffect, deleting ? 50 : 120);
    }

    // ⏱️ Small delay before typing the first phrase
    setTimeout(typeEffect, 1000);
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


document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});












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

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("thesisModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const modalImage = document.getElementById("modalImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const modalTitle = document.querySelector(".modal-description h3");
    const modalText = document.querySelector(".modal-description p");

    // Each image has its own title & description
    let thesisData = [
        {
            src: "images/thesis1.jpg",
            title: "Automated Watering System - 3D Overview",
            text: "The automated watering system irrigates a 200-meter agricultural area through four independently controlled sections. Soil moisture sensors trigger water delivery only when needed, using relays and pumps for efficient distribution. This automation reduces labor, saves water, and supports consistent, healthy crop growth—ideal for large-scale farming."
        },
        {
            src: "images/thesis2.jpg",
            title: "Soil Monitoring Section",
            text: "The soil moisture indicator’s website interface displays real-time readings from field sensors, allowing users to monitor soil conditions remotely. It features clear visual indicators for moisture levels, enabling timely irrigation decisions. This online access improves efficiency, reduces guesswork, and supports better crop management."
        },
        {
            src: "images/thesis3.jpg",
            title: "Relay and Pump System",
            text: "The website interface includes relay and manual pump controls that allow users to operate the irrigation system remotely via Wi-Fi. By sending real-time signals to the relays, the system can be manually activated or overridden, ensuring flexibility for special watering needs and quick responses to changing conditions."
        },
    ];

    let currentIndex = 0;

    function showSlide(index) {
        modalImage.classList.remove("show");
        setTimeout(() => {
            modalImage.src = thesisData[index].src;
            modalTitle.textContent = thesisData[index].title;
            modalText.textContent = thesisData[index].text;
            modalImage.classList.add("show");
        }, 200);
    }

    // Open modal
    openModal.addEventListener("click", function () {
        modal.style.display = "flex";
        showSlide(currentIndex);
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Prev image
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + thesisData.length) % thesisData.length;
        showSlide(currentIndex);
    });

    // Next image
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % thesisData.length;
        showSlide(currentIndex);
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




let currentZoom = 1;

function openResumeModal() {
    document.getElementById('resumeModal').classList.add('show');
    currentZoom = 1;
    updateZoom();
}

function closeResumeModal() {
    document.getElementById('resumeModal').classList.remove('show');
}

function zoomIn() {
    currentZoom += 0.1;
    updateZoom();
}

function zoomOut() {
    currentZoom = Math.max(0.5, currentZoom - 0.1);
    updateZoom();
}

function updateZoom() {
    const img = document.getElementById('zoomableResume');
    img.style.transform = `scale(${currentZoom})`;

    if (currentZoom >= 2) {
        img.classList.remove('cursor-zoom-in');
        img.classList.add('cursor-zoom-out');
    } else {
        img.classList.remove('cursor-zoom-out');
        img.classList.add('cursor-zoom-in');
    }
}

document.getElementById('zoomableResume').addEventListener('click', () => {
    if (currentZoom < 2) {
        currentZoom += 0.5;
    } else {
        currentZoom = 1;
    }
    updateZoom();
});
