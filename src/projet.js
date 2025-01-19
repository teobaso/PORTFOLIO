document.addEventListener('DOMContentLoaded', () => {
    const rea = document.querySelectorAll('.realisation'); // Tous les projets
    const popup = document.getElementById('popup'); // La popup
    const popupContent = document.querySelector('.popup-content'); // Contenu de la popup
    const popupSummary = document.getElementById('popup-summary'); // Résumé
    const popupImage = document.getElementById('popup-image'); // Image
    const closePopup = document.getElementById('close-popup'); // Bouton de fermeture
    const refDoc = document.querySelector('.buttondoc.consult'); // Bouton "Consulter"
    const refDownload = document.querySelector('.buttondoc.download'); // Bouton "Télécharger"

    // Parcourir les projets
    rea.forEach(realisation => {
        const button = realisation.querySelector('button'); // Bouton "En savoir plus"

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêche les événements inutiles

            // Récupérer les données spécifiques
            const imageSrc = realisation.getAttribute('data-image');
            const summary = realisation.getAttribute('data-summary');
            const docURL = realisation.getAttribute('data-refdoc');
            const downloadURL = realisation.getAttribute('data-refdownload');

            // Ajouter les données à la popup
            popupSummary.textContent = summary || 'Aucune information disponible';

            if (imageSrc) {
                popupImage.src = imageSrc;
                popupImage.style.display = 'block';
            } else {
                popupImage.style.display = 'none';
            }

            // Configurer les liens
            if (docURL) {
                refDoc.href = docURL;
                refDoc.style.display = 'inline-block';
            } else {
                refDoc.style.display = 'none';
                refDoc.href = '#'; // Réinitialise au cas où
            }

            if (downloadURL) {
                refDownload.href = downloadURL;
                refDownload.style.display = 'inline-block';
            } else {
                refDownload.style.display = 'none';
                refDownload.href = '#'; // Réinitialise au cas où
            }

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
        if (!popupContent.contains(event.target) && !event.target.closest('.realisation')) {
            popup.classList.remove('active');
        }
    });
});
