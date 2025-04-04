const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference, if any, on load of the website
const darkMode = localStorage.getItem('darkMode');

// If the user previously enabled dark mode, apply it to the body
if (darkMode === 'enabled') {
    body.setAttribute('data-theme', 'dark');
}

darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode on button click
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null);
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    }
});