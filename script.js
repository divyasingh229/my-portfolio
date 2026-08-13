const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");

menuButton.onclick = function () {
    navLinks.classList.toggle("show");
};

navLinks.querySelectorAll("a").forEach(function (link) {
    link.onclick = function () {
        navLinks.classList.remove("show");
    };
});

themeButton.onclick = function () {
    document.body.classList.toggle("dark");

    themeButton.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#9b5c4d";
        return;
    }

    formMessage.textContent = "Message submitted successfully!";
    formMessage.style.color = "#6d3b5f";
    form.reset();
};

const animatedSections = document.querySelectorAll(".animate");

function showSections() {
    animatedSections.forEach(function (section) {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();
