// Contact Form Validation
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!contactForm || !formSuccess) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!fullName || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes, show success message
        contactForm.reset();
        formSuccess.classList.remove('hidden');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
    });
}

window.addEventListener('DOMContentLoaded', initContactForm); 