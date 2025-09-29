document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-submenu > a").forEach(function (element) {
        element.addEventListener("click", function (e) {
            let nextMenu = this.nextElementSibling;
            if (nextMenu && nextMenu.classList.contains("dropdown-menu")) {
                e.preventDefault();
                nextMenu.classList.toggle("show");
            }
        });
    });
});

