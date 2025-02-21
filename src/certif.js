document.addEventListener('DOMContentLoaded', () => {
    const certification = document.querySelectorAll('.case'); // Tous les projets
    const popup = document.getElementById('popup'); // La popup
    const popupContent = document.querySelector('.popup-content'); // Contenu de la popup
    const popupSummary = document.getElementById('popup-summary'); // Résumé
    const closePopup = document.getElementById('close-popup'); // Bouton de fermeture

    // Parcourir les projets
    certification.forEach(certif => {
        const button = certif.querySelector('button'); // Bouton "En savoir plus"

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêche les événements inutiles

            // Récupérer les données spécifiques
            const summary = certif.querySelector('.text-certif')?.textContent.trim();

            // Ajouter les données à la popup
            popupSummary.textContent = summary || 'Aucune information disponible';

            // Afficher la popup
            popup.classList.add('active');
        });
    });

    // Bouton de fermeture
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Fermer en cliquant en dehors
    window.addEventListener('click', (event) => {
        if (!popupContent.contains(event.target) && !event.target.closest('.case')) {
            popup.classList.remove('active');
        }
    });
});
