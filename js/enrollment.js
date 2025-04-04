// enrollment.js
function enrollCourse(courseId) {
    const modal = document.createElement('div');
    modal.className = 'enrollment-modal';
    modal.innerHTML = `
        <div class="enrollment-form">
            <div class="form-header">
                <h2>Course Enrollment</h2>
                <button class="close-btn" onclick="closeEnrollmentModal()">×</button>
            </div>
            <div class="form-scroll-container">
                <form id="enrollmentForm">
                    <div class="form-section">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="fullName">Full Name *</label>
                                <input type="text" id="fullName" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone *</label>
                                <input type="tel" id="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="education">Education *</label>
                                <select id="education" required>
                                    <option value="">Select Level</option>
                                    <option value="high-school">High School</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="bachelors">Bachelor's</option>
                                    <option value="masters">Master's</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="startDate">Start Date *</label>
                                <input type="date" id="startDate" required>
                            </div>
                            <div class="form-group">
                                <label for="studyMode">Study Mode *</label>
                                <select id="studyMode" required>
                                    <option value="">Select Mode</option>
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="button-group">
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-check"></i> Enroll Now
                        </button>
                        <button type="button" class="cancel-btn" onclick="closeEnrollmentModal()">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeEnrollmentModal();
        }
    });

    // Handle form submission
    document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all form values
        const enrollmentData = {
            courseId: courseId,
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            education: document.getElementById('education').value,
            startDate: document.getElementById('startDate').value,
            studyMode: document.getElementById('studyMode').value,
            enrollmentDate: new Date().toISOString()
        };

        try {
            // Get existing enrollments or initialize empty array
            const enrollments = JSON.parse(localStorage.getItem('courseEnrollments') || '[]');
            
            // Add new enrollment
            enrollments.push(enrollmentData);
            
            // Save to localStorage
            localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
        
            // Show success message
            showSuccessMessage(enrollmentData.fullName);
        } catch (error) {
            console.error('Error saving enrollment:', error);
            showErrorMessage();
        }
    });
}

function showSuccessMessage(studentName) {
    const form = document.querySelector('.enrollment-form');
    form.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 2rem;">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: #22c55e; margin-bottom: 1rem;"></i>
            <h2 style="color: #22c55e; margin-bottom: 1rem;">Enrollment Successful!</h2>
            <p style="margin-bottom: 1rem;">Thank you ${studentName} for enrolling!</p>
            <p style="margin-bottom: 1.5rem;">Your enrollment details have been saved.</p>
            <div class="button-group" style="justify-content: center;">
                <button onclick="showMyEnrollments()" class="submit-btn">
                    <i class="fas fa-list"></i> View My Enrollments
                </button>
                <button onclick="closeEnrollmentModal()" class="cancel-btn">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        </div>
    `;
}

function showErrorMessage() {
    const form = document.querySelector('.enrollment-form');
    form.innerHTML = `
        <div class="error-message" style="text-align: center; padding: 2rem;">
            <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;"></i>
            <h2 style="color: #ef4444; margin-bottom: 1rem;">Enrollment Failed</h2>
            <p style="margin-bottom: 1.5rem;">Sorry, there was an error saving your enrollment. Please try again.</p>
            <button onclick="closeEnrollmentModal()" class="cancel-btn">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
}

function closeEnrollmentModal() {
    const modal = document.querySelector('.enrollment-modal');
    if (modal) {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
    }
}

function showMyEnrollments() {
    const enrollments = JSON.parse(localStorage.getItem('courseEnrollments') || '[]');
    const modal = document.createElement('div');
    modal.className = 'enrollment-modal';
    
    let enrollmentsList = enrollments.length ? enrollments.map(enrollment => `
        <div class="enrollment-item">
            <h3>Course ID: ${enrollment.courseId}</h3>
            <div class="enrollment-details">
                <p><strong>Name:</strong> ${enrollment.fullName}</p>
                <p><strong>Email:</strong> ${enrollment.email}</p>
                <p><strong>Phone:</strong> ${enrollment.phone}</p>
                <p><strong>Education:</strong> ${enrollment.education}</p>
                <p><strong>Start Date:</strong> ${new Date(enrollment.startDate).toLocaleDateString()}</p>
                <p><strong>Study Mode:</strong> ${enrollment.studyMode}</p>
                <p><strong>Enrolled on:</strong> ${new Date(enrollment.enrollmentDate).toLocaleDateString()}</p>
            </div>
        </div>
    `).join('') : '<p>No enrollments found.</p>';

    modal.innerHTML = `
        <div class="enrollment-form">
            <div class="form-header">
                <h2>My Enrollments</h2>
                <button class="close-btn" onclick="closeEnrollmentModal()">×</button>
            </div>
            <div class="form-scroll-container">
                <div class="enrollments-list">
                    ${enrollmentsList}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}
