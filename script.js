// Navigation menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
});

// Project filter function
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox for project images
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.close');

document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
});

// Contact form validation and submit simulation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for your message!';
        form.reset();
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields correctly.';
    }
});
