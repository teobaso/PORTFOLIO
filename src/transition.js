document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
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


function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (let si in document.styleSheets) {
            let styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}