// =========================
// EVENTO LOAD
// =========================

window.addEventListener("load", function () {

    console.log("Página cargada correctamente");

    alert("Bienvenido a Finca El Sembrador");

});

// =========================
// CAPTURAR ELEMENTOS
// =========================

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const telefono = document.getElementById("telefono");

const password = document.getElementById("password");

const boton = document.getElementById("btnEnviar");

const contador = document.getElementById("contador");

const volverArriba = document.getElementById("volverArriba");

const titulo = document.querySelector("h1");

const mostrarPassword =
document.getElementById("mostrarPassword");

// =========================
// EVENTO RESIZE
// =========================

window.addEventListener("resize", function () {

    if(window.innerWidth <= 768){

        titulo.style.backgroundColor = "#66bb6a";

    }else{

        titulo.style.backgroundColor = "#2e7d32";

    }

});

// =========================
// EVENTO SCROLL
// =========================

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        volverArriba.style.display = "block";

    } else {

        volverArriba.style.display = "none";

    }

});

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

volverArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// EVENTO FOCUS
// =========================

nombre.addEventListener("focus", function () {

    nombre.style.backgroundColor = "#dcedc8";

});

correo.addEventListener("focus", function () {

    correo.style.backgroundColor = "#dcedc8";

});

telefono.addEventListener("focus", function () {

    telefono.style.backgroundColor = "#dcedc8";

});

password.addEventListener("focus", function () {

    password.style.backgroundColor = "#dcedc8";

});

// =========================
// EVENTO BLUR
// =========================

nombre.addEventListener("blur", function () {

    nombre.style.backgroundColor = "white";

});

correo.addEventListener("blur", function () {

    correo.style.backgroundColor = "white";

});

telefono.addEventListener("blur", function () {

    telefono.style.backgroundColor = "white";

});

password.addEventListener("blur", function () {

    password.style.backgroundColor = "white";

});

// =========================
// EVENTO INPUT
// =========================

password.addEventListener("input", function () {

    contador.textContent =
    "Caracteres: " + password.value.length;

});

// =========================
// EVENTO MOUSEOVER
// =========================

boton.addEventListener("mouseover", function () {

    boton.style.transform = "scale(1.05)";

});

// =========================
// EVENTO MOUSEOUT
// =========================

boton.addEventListener("mouseout", function () {

    boton.style.transform = "scale(1)";

});

// =========================
// EVENTO SUBMIT
// =========================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    if (
        nombre.value === "" ||
        correo.value === "" ||
        password.value === ""
    ) {

        alert("Debes completar todos los campos");

    } else {

        alert("Reserva enviada correctamente");

        formulario.reset();

        contador.textContent = "Caracteres: 0";

    }

});

// =========================
// MOSTRAR CONTRASEÑA
// =========================

mostrarPassword.addEventListener("change", function () {

    if (mostrarPassword.checked) {

        password.type = "text";

    } else {

        password.type = "password";

    }

});
