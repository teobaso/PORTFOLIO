document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("#menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("change", function () {
        menu.classList.toggle("active", this.checked);
    });
});
