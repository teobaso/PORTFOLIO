document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('.point');
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content'); // Correction : sélection de .popup-content
    const popupSummary = document.getElementById('popup-summary');
    const popupImage1 = document.getElementById('popup-image1');
    const popupImage2 = document.getElementById('popup-image2');
    const closePopup = document.getElementById('close-popup');

    points.forEach(point => {
        point.addEventListener('click', () => {
            const summary = point.getAttribute('data-summary');
            const image1 = point.getAttribute('data-image1');
            const image2 = point.getAttribute('data-image2');

            popupSummary.innerHTML = summary;

            if (image1) {
                popupImage1.src = image1;
                popupImage1.style.display = 'block';
            } else {
                popupImage1.style.display = 'none';
            }

            if (image2) {
                popupImage2.src = image2;
                popupImage2.style.display = 'block';
            } else {
                popupImage2.style.display = 'none';
            }

            popup.classList.add('active');
        });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Fermer la pop-up en cliquant en dehors du contenu de la pop-up
    window.addEventListener('click', (event) => {
        if (!popupContent.contains(event.target) && !event.target.classList.contains('point')) {
            popup.classList.remove('active'); // Retire la classe active pour cacher la pop-up
        }
    });
});
