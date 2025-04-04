document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('courseSearch');
    const searchBtn = document.getElementById('searchBtn');
    const courseCards = document.querySelectorAll('.course-card');
    const courseGrid = document.querySelector('.course-grid');
    const viewAllBtn = document.querySelector('.view-all-btn');

    // Initialize search on page load
    initSearch();

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        filterCourses(e.target.value);
    });
    searchBtn.addEventListener('click', () => {
        filterCourses(searchInput.value);
    });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterCourses(searchInput.value);
        }
    });
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', resetSearch);
    }

    // Functions
    function initSearch() {
        // Add animation classes to course cards
        courseCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate__animated', 'animate__fadeInUp');
        });
    }

    function filterCourses(searchTerm) {
        searchTerm = searchTerm.toLowerCase().trim();
        let hasVisibleCards = false;
        
        courseCards.forEach(card => {
            // Get all searchable content from the card
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const meta = card.querySelector('.course-meta')?.textContent.toLowerCase() || '';
            const duration = card.querySelector('.course-duration')?.textContent.toLowerCase() || '';
            const content = `${title} ${description} ${meta} ${duration}`;

            // Check if the search term matches any content
            if (content.includes(searchTerm) || searchTerm === '') {
                card.style.display = '';
                hasVisibleCards = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results message
        let noResultsMsg = document.querySelector('.no-results');
        if (!hasVisibleCards && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results';
                noResultsMsg.innerHTML = `
                    <div class="no-results-content">
                        <i class="fas fa-search"></i>
                        <h3>No courses found</h3>
                        <p>Try different keywords or browse all courses</p>
                    </div>
                `;
                courseGrid.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }

    function resetSearch() {
        searchInput.value = '';
        filterCourses(searchInput.value);
        // Scroll to top of course grid
        courseGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});