// Script principal pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Marquer la page active dans la navigation
    markActivePage();
    
    // Initialiser le carousel si présent sur la page
    initCarousel();
});

// Fonction pour marquer la page active dans la navigation
function markActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Si nous sommes sur la page d'accueil
    if (currentPage === '' || currentPage === 'index.html') {
        const homeLink = document.querySelector('nav ul li a[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
}

// Fonction pour initialiser le carousel
function initCarousel() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const pages = document.querySelectorAll('.carousel-page');
    
    if (pages.length > 0 && nextBtn && prevBtn) {
        let currentPage = 0;
        
        // S'assurer que la première page est visible au chargement
        pages[0].classList.add('active');
        
        nextBtn.addEventListener('click', () => {
            pages[currentPage].classList.remove('active');
            currentPage = (currentPage + 1) % pages.length; 
            pages[currentPage].classList.add('active');
        });
        
        prevBtn.addEventListener('click', () => {
            pages[currentPage].classList.remove('active');
            currentPage = (currentPage - 1 + pages.length) % pages.length;
            pages[currentPage].classList.add('active');
        });
    }
}

// Gestion du bouton "Retour en haut"
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});