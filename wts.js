const telefono = document.getElementById('telefono');
const enviarNumero = document.getElementById('enviarNumero');

function obtenerEnlace(numeroTelefono) {
    window.open(`https://wa.me/${numeroTelefono}`)
};

enviarNumero.addEventListener('click', () => {
    if(telefono.value == 0 || telefono.value == ''){
        alert('Escribe un numero valido por favor 😊')
    }
    obtenerEnlace(telefono.value);
})
