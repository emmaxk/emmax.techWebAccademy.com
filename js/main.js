// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sample course data
const courses = [
    {
        title: "Web Development Fundamentals",
        description: "Master HTML5, CSS3, and JavaScript basics for modern web development",
        duration: "10 weeks",
        rating: "4.8/5",
        enrolled: "3.2k+ enrolled",
        image: "images/webdvpt.jpg",
        icon: "fas fa-laptop-code"
    },
    {
        title: "Advanced JavaScript",
        description: "Deep dive into ES6+, async programming, and JavaScript design patterns",
        duration: "12 weeks",
        rating: "4.9/5",
        enrolled: "2.1k+ enrolled",
        image: "images/js.jpg",
        icon: "fab fa-js"
    },
    {
        title: "React.js Development",
        description: "Build modern web applications with React.js and its ecosystem",
        duration: "14 weeks",
        rating: "4.9/5",
        enrolled: "2.8k+ enrolled",
        image: "images/react.jpg",
        
        icon: "fab fa-react"
    },
    {
        id: 4,
        title: "Python for Data Science",
        description: "Learn Python programming for data analysis, visualization, and machine learning.",
        image: "images/python1.jpg",
        duration: "14 Weeks",
        level: "Intermediate",
        rating: "4.8/5",
        enrolled: "2.3k+ enrolled",
        icon: "fab fa-python"
    },
    {
        id: 5,
        title: "UI/UX Design Principles",
        description: "Master the fundamentals of user interface and experience design.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=70",
        duration: "8 Weeks",
        level: "Beginner",
        rating: "4.7/5",
        enrolled: "1.9k+ enrolled",
        icon: "fas fa-paint-brush"
    },
    {
        id: 6,
        title: "Full Stack Development",
        description: "Comprehensive course covering both frontend and backend technologies.",
        image: "images/fullstack.jpg",
        duration: "16 Weeks",
        level: "Advanced",
        rating: "4.9/5",
        enrolled: "1.5k+ enrolled",
        icon: "fas fa-layer-group"
    },
    {
        id: 7,
        title: "Cloud Computing",
        description: "Master cloud platforms like AWS, Azure, and Google Cloud for scalable applications.",
        image: "images/cloud.jpg",
        duration: "12 Weeks",
        level: "Intermediate",
        rating: "4.8/5",
        enrolled: "1.8k+ enrolled",
        icon: "fas fa-cloud"
    },
    {
        id: 8,
        title: "Cybersecurity Fundamentals",
        description: "Learn essential security concepts, threat detection, and protection strategies.",
        image: "images/cyber.jpg",
        duration: "10 Weeks",
        level: "Beginner",
        rating: "4.7/5",
        enrolled: "1.2k+ enrolled",
        icon: "fas fa-shield-alt"
    }
];

// Sample testimonial data
const testimonials = [
    {
        content: "The courses at BreakThrough Tech Academy transformed my career. I went from knowing nothing about coding to landing a job as a junior developer in just 6 months!",
        author: "Collines Kyobe",
        role: "Web Developer",
        image: "images/gay.jpg"
    },
    {
        content: "The instructors are incredibly knowledgeable and supportive. The curriculum is well-structured and keeps up with industry trends.",
        author: "Mulindwa umar",
        role: "Software Engineer",
        image: "images/omar.jpg"
    },
    {
        content: "I've taken online courses before, but none compare to the hands-on experience and community support at BreakThrough Tech Academy.",
        author: "Emmanuel Kizza",
        role: "UX Designer",
        image: "images/emm.png"
    }
];

// Populate featured courses on homepage
function populateFeaturedCourses() {
    const courseGrid = document.querySelector('.course-grid');
    if (courseGrid) {
        // Clear existing content
        courseGrid.innerHTML = '';
        // Add courses
        courses.forEach(course => {
            courseGrid.innerHTML += createCourseCard(course);
        });
    }
}

// Create course card element
function createCourseCard(course) {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const buttonHtml = isHomePage 
        ? `<a href="courses.html" class="btn">
            <i class="fas fa-sign-in-alt"></i> Register Now
           </a>`
        : `<button class="enroll-btn" onclick="enrollCourse('${course.id || course.title.toLowerCase().replace(/\s+/g, '-')}')">
            <i class="fas fa-sign-in-alt"></i> Enroll Now
           </button>`;

    return `
        <div class="course-card">
            <div class="course-icon">
                <i class="${course.icon}"></i>
            </div>
            <img src="${course.image}" 
                 alt="${course.title}" 
                 loading="lazy"
                 width="250"
                 height="140">
            <div class="course-info">
                <h3><i class="${course.icon}"></i> ${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-star"></i> ${course.rating}</span>
                    <span><i class="fas fa-users"></i> ${course.enrolled}</span>
                </div>
                ${buttonHtml}
            </div>
        </div>
    `;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }
    }
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides || slides.length === 0) {
        console.warn('No hero slides found');
        return;
    }

    let currentSlide = 0;
    const totalSlides = slides.length;

    function nextSlide() {
        if (!slides[currentSlide]) return;
        
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
        }
    }

    // Initialize first slide
    if (slides[0]) {
        slides[0].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Initialize other features
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    populateFeaturedCourses();
});

function scrollToAbout(event) {
    event.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Animate resources on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.resource-card').forEach(card => {
        observer.observe(card);
    });
}); 