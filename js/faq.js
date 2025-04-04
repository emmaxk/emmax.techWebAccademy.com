// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqContainer = document.querySelector('.faq-container');
    
    // FAQ Data
    const faqData = [
        {
            question: "What courses do you offer?",
            answer: "We offer a variety of tech courses including Frontend Development, Backend Development, and Database Administration. Each course is designed to provide practical, industry-relevant skills."
        },
        {
            question: "How long are the courses?",
            answer: "Most of our courses run for 12 weeks. We offer both full-time and part-time options to accommodate different schedules."
        },
        {
            question: "Are there any prerequisites?",
            answer: "While specific prerequisites vary by course, most require basic computer literacy and English proficiency. Some advanced courses may require prior programming experience."
        },
        {
            question: "What is the cost of the courses?",
            answer: "Course fees range from UGX 350K to UGX 500K. We offer flexible payment plans and scholarship opportunities for eligible students."
        },
        {
            question: "Do you offer job placement assistance?",
            answer: "Yes, we provide career support including resume building, interview preparation, and connections to our network of hiring partners."
        }
    ];

    // Create FAQ items
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <div class="faq-icon">Q</div>
                <h3>${item.question}</h3>
                <div class="toggle-btn"></div>
            </div>
            <div class="faq-answer">
                <div class="answer-content">
                    <div class="faq-icon">A</div>
                    <p>${item.answer}</p>
                </div>
            </div>
        `;
        faqContainer.appendChild(faqItem);

        // Add click event listener
        const question = faqItem.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
            });

            // Toggle current FAQ item
            if (!isActive) {
                faqItem.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});