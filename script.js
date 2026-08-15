// Mobile navigation
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// Scroll reveal
const cards = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .resume-box"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// Contact link feedback
document.querySelectorAll(".contact-links a").forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(.97)";
        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    });
});
