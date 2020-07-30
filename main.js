var menuDesplegable = function () {
    let navLinks = document.querySelector(".nav-links");
    let menuEstado = window.getComputedStyle(navLinks).getPropertyValue("display");
    if (menuEstado == "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none"
    }


}