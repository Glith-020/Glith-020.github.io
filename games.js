document.addEventListener('DOMContentLoaded', function() {
    // This function is handled by inline playVideo() in HTML
    // Removed to avoid conflicts
});
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
});
// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');
const body = document.body;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
        body.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});
