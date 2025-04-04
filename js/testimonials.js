// Testimonials Carousel
let currentTestimonialIndex = 0;

function initTestimonials() {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (!testimonialCarousel) return;
    
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.author}">
                <div class="image-border"></div>
            </div>
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-author">
                <p>${testimonial.author}</p>
                <span>${testimonial.role}</span>
            </div>
        `;
        testimonialCarousel.appendChild(slide);
    });
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);
}

function nextTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;
    
    slides[currentTestimonialIndex].classList.remove('active');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % slides.length;
    slides[currentTestimonialIndex].classList.add('active');
}

window.addEventListener('DOMContentLoaded', initTestimonials); 