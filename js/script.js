// Add your JavaScript here
console.log('Good website here, right?');

// Smooth scrolling for navigation links and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Check for saved theme preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Switch to sun icon for light mode
        sections.forEach(section => section.classList.add('dark-mode'));
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
    } else {
        toggleButton.textContent = '🌙'; // Default to moon icon for dark mode
    }

    // Toggle dark mode
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.textContent = '🌙'; // Switch to moon icon for dark mode
            localStorage.setItem('dark-mode', 'disabled');
            sections.forEach(section => section.classList.remove('dark-mode'));
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Switch to sun icon for light mode
            localStorage.setItem('dark-mode', 'enabled');
            sections.forEach(section => section.classList.add('dark-mode'));
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
        }
    });
});
