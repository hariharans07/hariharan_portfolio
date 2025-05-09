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
});

// Helper Functions (move all existing function implementations here)
function handleStickyHeader() {
    // ...existing sticky header code...
}

// ...rest of the existing JavaScript functions...
