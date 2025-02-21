document.addEventListener('DOMContentLoaded', () => {
    const cases = document.querySelectorAll('.case'); // Sélectionne toutes les cases
    const popup = document.getElementById('popup'); // La popup
    const popupContent = document.querySelector('.popup-content'); // Contenu de la popup
    const popupSummary = document.getElementById('popup-summary'); // Texte de la popup
    const closePopup = document.getElementById('close-popup'); // Bouton de fermeture

    // Vérification que chaque case contient un bouton et un texte caché
    cases.forEach(ca => {
        const button = ca.querySelector('.button'); // Bouton "En savoir plus"
        const summaryElement = ca.querySelector('.text-certif'); // Texte caché

        if (button && summaryElement) {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Empêche la propagation de l'événement

                // Récupérer le texte de la certification
                const summary = summaryElement.textContent.trim();

                // Ajouter les données à la popup
                popupSummary.textContent = summary || 'Aucune information disponible';

                // Afficher la popup
                popup.classList.add('active');
            });
        }
    });

    // Bouton de fermeture
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Fermer en cliquant en dehors de la popup
    window.addEventListener('click', (event) => {
        if (!popupContent.contains(event.target) && !event.target.closest('.case')) {
            popup.classList.remove('active');
        }
    });
});
