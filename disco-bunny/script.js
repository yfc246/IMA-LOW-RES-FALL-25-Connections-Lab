//gemini
let mainContent = document.getElementById('main-content');
let gifImage = document.getElementById('gif');
let lastScrollY = window.scrollY;
let isImageActive = false; // Flag to track current state (gemini)


// Function to handle scroll direction and update content
function handleScroll() {
    let currentScrollY = window.scrollY;

    // Scroll Up detected and content section is active, it's giving me opposite desired effect
    if (currentScrollY < lastScrollY && !isImageActive) {
        // User scrolled up
        console.log('Scrolling UP - showing image');
        mainContent.classList.replace('active', 'hidden');
        gifImage.classList.replace('hidden', 'active');
        isImageActive = true;
    } 
    // Scroll Down detected and image section is active
    else if (currentScrollY > lastScrollY && isImageActive) {
        // User scrolled down
        console.log('Scrolling DOWN - showing text');
        mainContent.classList.replace('active', 'hidden');
        gifImage.classList.replace('hidden', 'active');
        isImageActive = true;
        gifImage.classList.replace('active', 'hidden');
        mainContent.classList.replace('hidden', 'active');
        isImageActive = false;
    }

    lastScrollY = currentScrollY; // Update last known scroll position
}

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);

