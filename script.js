document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;

    let mensaje = document.getElementById("mensaje");

    if (!soloLetras(nombre)) {
        mensaje.textContent = "El nombre solo debe contener letras";
        return;
    }

    if (!soloLetras(apellido)) {
        mensaje.textContent = "El apellido solo debe contener letras";
        return;
    }

    if (!soloNumeros(dni)) {
        mensaje.textContent = "El DNI solo debe contener números";
        return;
    }

    if (!validarEmail(email)) {
        mensaje.textContent = "El email no es válido";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente ✅";
});

function soloLetras(texto) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function soloNumeros(texto) {
    let regex = /^[0-9]+$/;
    return regex.test(texto);
}

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}