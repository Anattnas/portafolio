/* ============================
   MODO OSCURO
=============================== */

// Detectar si el usuario ya tenía modo oscuro guardado
if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
}

document.getElementById("modoBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Guardar preferencia
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
});


/* ============================
   ANIMACIÓN AL HACER SCROLL
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
   SMOOTH SCROLL (Navegación suave)
=============================== */

document.querySelectorAll("nav a").forEach(enlace => {
    enlace.addEventListener("click", function (e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: seccion.offsetTop - 70,
            behavior: "smooth"
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

    indice += direccion;

    if (indice < 0) {
        indice = slides.length - 1;
    }

    if (indice >= slides.length) {
        indice = 0;
    }

    track.style.transform = `translateX(-${indice * 100}%)`;
}

/* Imagen grande */

function abrirImagen(src) {
    document.getElementById("modalImagen").style.display = "flex";
    document.getElementById("imgGrande").src = src;
}

function cerrarImagen() {
    document.getElementById("modalImagen").style.display = "none";
}

/* Hacer funciones globales para HTML onclick */
window.moverCarrusel = moverCarrusel;
window.abrirImagen = abrirImagen;
window.cerrarImagen = cerrarImagen;
