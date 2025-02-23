document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('.point');
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const popupSummary = document.getElementById('popup-summary');
    const popupImage1 = document.getElementById('popup-image1');
    const popupImage2 = document.getElementById('popup-image2');
    const closePopup = document.getElementById('close-popup');

    points.forEach(point => {
        point.addEventListener('click', () => {
            const image1 = point.getAttribute('data-image1');
            const image2 = point.getAttribute('data-image2');

            // Récupérer tous les éléments .summaryText et concaténer leur contenu
            let summaryText = Array.from(point.querySelectorAll('.summaryText'))
                .map(el => el.innerHTML)
                .join('<br><br>'); // Ajoute une séparation entre les paragraphes

            if (popupSummary) {
                popupSummary.innerHTML = summaryText;
            } else {
                console.error("popupSummary n'existe pas !");
            }
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
            popup.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('.point');

    points.forEach(point => {
        const tooltip = point.querySelector('.tooltip');

        // Cacher le tooltip par défaut
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = 0;

        point.addEventListener('mouseover', () => {
            const image1 = point.getAttribute('data-image1');
            const image2 = point.getAttribute('data-image2');
            const summaryText = point.querySelector('.summaryText').innerText;

            // Récupérer le titre du tooltip avant de vider son contenu
            const tooltipTitle = tooltip.getAttribute('data-title') || tooltip.innerText;

            // Tronquer le texte si trop long
            const truncatedText = summaryText.length > 50 ? summaryText.substring(0, 50) + '...' : summaryText;

            // Construire le contenu du tooltip
            tooltip.innerHTML = `<h3><strong>${tooltipTitle}</strong></h3>`;

            if (image1 || image2) {
                tooltip.innerHTML += `<img src="${image1 || image2}" alt="Image" style="max-width: 8rem;"> ${truncatedText}`;
            } else {
                tooltip.innerHTML += truncatedText;
            }

            // Récupérer les dimensions du tooltip
            const tooltipWidth = tooltip.offsetWidth;

            // Positionner le tooltip
            const pointRect = point.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Calculer l'espace disponible
            const spaceRight = windowWidth - pointRect.right;
            const spaceLeft = pointRect.left;

            // Placement du tooltip
            if (spaceRight > tooltipWidth) {
                tooltip.style.left = `${pointRect.width + tooltipWidth / 2}px`;  // Afficher à droite
            } else if (spaceLeft > tooltipWidth) {
                tooltip.style.left = `${pointRect.width - tooltipWidth / 2 - 50}px`;  // Afficher à droite
            }

            // Afficher le tooltip
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
        });

        point.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        });
    });
});
