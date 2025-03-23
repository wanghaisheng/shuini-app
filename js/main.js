// Main JavaScript functionality for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the animations and interactions
    initAnimations();
    
    // Handle navigation smooth scrolling
    initSmoothScrolling();
    
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    
    // Initial resize handling
    handleResize();
});

function initAnimations() {
    // Fade in elements as they come into view
    const fadeElements = document.querySelectorAll('.feature-card, .testimonial-card, .app-device');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
    });
    
    // Animate buttons on hover
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function handleResize() {
    // Adjust any elements that need responsive adjustments
    const isMobile = window.innerWidth < 768;
    
    // Adjust elements based on screen size
    if (isMobile) {
        // Mobile-specific adjustments
    } else {
        // Desktop-specific adjustments
    }
}