document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Ajout d'un gestionnaire d'événements pour les liens du menu
document.querySelectorAll('#menu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var target = event.target.getAttribute('href');
        window.location.href = target;
    });
});

// Gestion de l'envoi du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulaire envoyé !');
    // Vous pouvez ajouter ici le code pour envoyer le formulaire via AJAX ou une autre méthode
});