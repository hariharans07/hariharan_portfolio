// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        // ...existing particles configuration...
    });
});

// Typewriter Class
class TypeWriter {
    // ...existing TypeWriter class code...
}

// Initialize TypeWriter
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.getElementById('typewriter');
    const words = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer', 'Freelancer'];
    const wait = 2000;
    new TypeWriter(txtElement, words, wait);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    window.addEventListener('scroll', handleStickyHeader);
    
    // Mobile Menu Toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    
    // Smooth Scrolling
    initSmoothScrolling();
    
    // Active Navigation
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Project Filtering
    initProjectFilters();
    
    // Form Submission
    initContactForm();
    
    // Download CV
    initDownloadCV();
    
    // Skill Animation
    window.addEventListener('scroll', animateSkills);
    
    // Scroll Spy
    window.addEventListener('scroll', updateActiveMenuItem);
});

// Helper Functions (move all existing function implementations here)
function handleStickyHeader() {
    // ...existing sticky header code...
}

// Update active menu item based on scroll position
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateActiveMenuItem);

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        from_name: this.querySelector('input[type="text"]').value,
        from_email: this.querySelector('input[type="email"]').value,
        subject: this.querySelector('input[type="text"]:nth-of-type(2)').value,
        message: this.querySelector('textarea').value,
        to_name: 'Hariharan S',
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
});
