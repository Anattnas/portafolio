/* ============================
   INICIAR CUANDO CARGUE HTML
=============================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       MODO OSCURO
    =============================== */

    if (localStorage.getItem("modo") === "dark") {
        document.body.classList.add("dark");
    }

    const btnModo = document.getElementById("modoBtn");

    if (btnModo) {
        btnModo.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("modo", "dark");
            } else {
                localStorage.setItem("modo", "light");
            }
        });
    }

    /* ============================
       ANIMACIÓN SCROLL
    =============================== */

    const elementos = document.querySelectorAll(".anim");

    function mostrarAnimacion() {
        elementos.forEach(el => {
            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight - 50) {
                el.style.animation = "subir 0.8s forwards";
            }
        });
    }

    window.addEventListener("scroll", mostrarAnimacion);
    mostrarAnimacion();

    /* ============================
       SMOOTH SCROLL
    =============================== */

    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();

            const seccion = document.querySelector(this.getAttribute("href"));

            if (seccion) {
                window.scrollTo({
                    top: seccion.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

});


/* ==========================
   CARRUSEL CERTIFICADOS
========================== */

let indice = 0;

function moverCarrusel(direccion) {
    const track = document.getElementById("track");
    const slides = document.querySelectorAll(".slide");

    if (!track || slides.length === 0) return;

    indice += direccion;

    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;

    track.style.transform = "translateX(-" + (indice * 100) + "%)";
}


/* ==========================
   IMAGEN GRANDE
========================== */

function abrirImagen(src) {
    const modal = document.getElementById("modalImagen");
    const img = document.getElementById("imgGrande");

    img.src = src;
    modal.style.display = "flex";
}

function cerrarImagen() {
    const modal = document.getElementById("modalImagen");

    if (modal) {
        modal.style.display = "none";
    }
}


/* Global */
window.moverCarrusel = moverCarrusel;
window.abrirImagen = abrirImagen;
window.cerrarImagen = cerrarImagen;
