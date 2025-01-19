// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Smooth Scrolling for Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Prevent Default Context Menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled on this page.');
});

// Disable Copy, Cut, and Inspect Key Combinations
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && 
        (e.key === 'c' || e.key === 'u' || e.key === 'a' || 
         e.key === 'v' || e.key === 'i')) {
        alert('This action is disabled.');
        e.preventDefault();
    }
});

// Select elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Check if elements exist
if (hamburger && navMenu) {
  console.log("Elements loaded successfully.");

  // Toggle navigation menu
  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked");
    navMenu.classList.toggle("menu-active");
  });
} else {
  console.error("Elements not found. Check HTML IDs.");
}