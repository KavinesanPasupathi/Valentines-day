// Generate floating hearts on page load
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = ['💕', '❤️', '💖', '💗', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Create hearts continuously
    setInterval(createHeart, 300);
}

// Initialize hearts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    
    // Get elements
    const revealBtn = document.getElementById('revealBtn');
    const valentineModal = document.getElementById('valentineModal');
    const successModal = document.getElementById('successModal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const closeBtn = document.getElementById('closeBtn');
    
    // Reveal button click
    revealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        valentineModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // Yes button click
    yesBtn.addEventListener('click', function() {
        valentineModal.classList.remove('show');
        successModal.classList.add('show');
        createCelebrationHearts();
        document.body.style.overflow = 'hidden';
    });
    
    // No button hover effect
    noBtn.addEventListener('mouseover', function(e) {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    // Alternative: No button click avoidance
    noBtn.addEventListener('click', function(e) {
        if (Math.random() > 0.7) {
            // Rarely let them click no (90% chance to evade, 10% to work)
            alert('😢 You broke my heart! But there is still hope... Try again!');
            valentineModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        } else {
            // Make it harder to click by moving it
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    });
    
    // Close button
    closeBtn.addEventListener('click', function() {
        successModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    [valentineModal, successModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// Create celebration hearts when she says YES
function createCelebrationHearts() {
    const hearts = ['💕', '❤️', '💖', '💗', '💝', '✨', '⭐'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.bottom = '0px';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
