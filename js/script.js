const themeButton = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const greeting = document.getElementById("greeting");

// Dark / Light Mode
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Switch to light mode";
    } else {
        themeButton.textContent = "Switch to dark mode";
    }
});

// Contact Form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();

    greeting.textContent = `Hello, ${visitorName}! Thanks for visiting my page.`;

    contactForm.reset();
});