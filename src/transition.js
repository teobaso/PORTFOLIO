document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const progressBar = document.querySelector(".progress-bar .progress");

    // Simuler un chargement progressif
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;

        // Lorsque le chargement atteint 100%, on masque le loader
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loader.style.display = "none";
        }
    }, 200); // Augmenter la progression toutes les 200 ms
});
