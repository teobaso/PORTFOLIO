document.addEventListener('DOMContentLoaded', () => {
    const rea = document.querySelectorAll('.realisation'); // Toutes les divs "realisation"
    const popup = document.getElementById('popup'); // La popup
    const popupContent = document.querySelector('.popup-content'); // Contenu de la popup
    const popupSummary = document.getElementById('popup-summary'); // Résumé dans la popup
    const popupImage = document.getElementById('popup-image'); // Image dans la popup
    const closePopup = document.getElementById('close-popup'); // Bouton pour fermer la popup

    // Parcourir chaque "realisation"
    rea.forEach(realisation => {
        const button = realisation.querySelector('button'); // Bouton "En savoir plus"

        // Ajouter un gestionnaire de clic sur le bouton
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêche le clic de remonter à la div parente

            // Récupérer les données de l'élément
            const imageSrc = realisation.getAttribute('data-image'); // Image associée
            const realisationText = realisation.querySelector('.summaryText').innerText; // Résumé

            // Ajouter le texte et l'image à la popup
            popupSummary.innerText = realisationText;

            if (imageSrc) {
                popupImage.src = imageSrc;
                popupImage.style.display = 'block';
            } else {
                popupImage.style.display = 'none';
            }

            // Afficher la popup
            popup.classList.add('active');
        });
    });

    // Fermer la popup en cliquant sur le bouton de fermeture
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Fermer la popup en cliquant en dehors de son contenu
    window.addEventListener('click', (event) => {
        if (!popupContent.contains(event.target)) {
            popup.classList.remove('active');
        }
    });
});
