// Main JavaScript for the app functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the time in the status bar
    updateStatusBarTime();
    
    // Set up event listeners for interactive elements
    setupInteractions();
    
    // Initialize quantum particle effect
    initQuantumParticles();
    
    // Initialize 3D ring if Three.js is available
    if (typeof THREE !== 'undefined') {
        initQuantumRing();
    }
});

// Update the time in the status bar
function updateStatusBarTime() {
    const timeElement = document.querySelector('.time');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
        
        // Update every minute
        setTimeout(updateStatusBarTime, 60000);
    }
}

// Set up interactions for various elements
function setupInteractions() {
    // Make tab bar items interactive
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItems.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set up ring rotation interaction
    const ringElement = document.getElementById('quantum-ring');
    if (ringElement) {
        let isDragging = false;
        let previousX = 0;
        let previousY = 0;
        let rotationX = 0;
        let rotationY = 0;
        
        ringElement.addEventListener('mousedown', function(e) {
            isDragging = true;
            previousX = e.clientX;
            previousY = e.clientY;
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const deltaX = e.clientX - previousX;
                const deltaY = e.clientY - previousY;
                
                rotationY += deltaX * 0.01;
                rotationX += deltaY * 0.01;
                
                ringElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
                
                previousX = e.clientX;
                previousY = e.clientY;
            }
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Touch events for mobile
        ringElement.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                isDragging = true;
                previousX = e.touches[0].clientX;
                previousY = e.touches[0].clientY;
            }
        });
        
        document.addEventListener('touchmove', function(e) {
            if (isDragging && e.touches.length === 1) {
                const deltaX = e.touches[0].clientX - previousX;
                const deltaY = e.touches[0].clientY - previousY;
                
                rotationY += deltaX * 0.01;
                rotationX += deltaY * 0.01;
                
                ringElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
                
                previousX = e.touches[0].clientX;
                previousY = e.touches[0].clientY;
            }
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
    }
}

// Initialize quantum particle effect
function initQuantumParticles() {
    const particlesContainer = document.getElementById('quantum-particles');
    if (!particlesContainer) return;
    
    // Create quantum particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

// Create a single quantum particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    
    // Random properties
    const size = 2 + Math.random() * 4;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 5 + Math.random() * 10;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.backgroundColor = Math.random() > 0.5 ? '#8A2BE2' : '#FF69B4';
    particle.style.opacity = 0.5 + Math.random() * 0.5;
    particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite alternate`;
    
    // Append to container
    container.appendChild(particle);
}

// Initialize 3D quantum ring with Three.js
function initQuantumRing() {
    // This is a placeholder for the Three.js implementation
    // In a real app, this would be a full 3D implementation
    console.log('Three.js detected, 3D ring would be initialized here');
}

// Add a CSS animation for particles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .quantum-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
        }
        100% {
            transform: translateY(30px) translateX(20px);
        }
    }
`;
document.head.appendChild(styleSheet);