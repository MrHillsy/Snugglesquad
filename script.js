// Hamburger menu toggle logic
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the menu visibility
});

document.getElementById('volunteer-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for volunteering! We will get in touch soon.');
});
