document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (!contactForm || !successMessage) {
        console.error('Required form elements not found');
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            reply_to: document.getElementById('email').value
        };

        // Send email using EmailJS
        emailjs.send('service_6l02c6y', 'template_o24o6r8', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show success message
                successMessage.classList.remove('hidden');
                // Reset form
                contactForm.reset();
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            })
            .catch(function(error) {
                console.error('Email sending failed:', error);
                alert('Failed to send message. Please try again later or contact us directly at info@breakthrough.tech');
            });
    });
}); 