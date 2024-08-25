var _encriptar = 1;
var _desencriptar = 2;

function Encriptar() {
    var textoIngresado = document.getElementById('txtTexto').value;
    console.log(reemplazarCaracteres(textoIngresado, _encriptar))
    document.getElementById('lblTexto').innerHTML = reemplazarCaracteres(textoIngresado, _encriptar)
}

function Desencriptar() {
    var textoIngresado = document.getElementById('txtTexto').value;
    console.log(reemplazarCaracteres(textoIngresado, _desencriptar))
    document.getElementById('lblTexto').innerHTML = reemplazarCaracteres(textoIngresado, _encriptar)
}

// Función para realizar sustituciones
function reemplazarCaracteres(texto, tipo) {
    var textEncriptado = texto;
    
    // Expresión regular para validar solo letras minúsculas
    var soloMinusculas = /^[a-z]+$/;

    if (soloMinusculas.test(textEncriptado)) {
        if (tipo == 1) {
            var sustituciones = [
                { buscar: 'a', reemplazo: 'ai' },
                { buscar: 'e', reemplazo: 'enter' },
                { buscar: 'i', reemplazo: 'imes' },
                { buscar: 'o', reemplazo: 'ober' },
                { buscar: 'u', reemplazo: 'ufat' }
            ];
        
            // Itera sobre cada sustitución
            sustituciones.forEach(sustitucion => {
                // Solo realiza la sustitución si el carácter está presente en el texto
                if (texto.includes(sustitucion.buscar)) {
                    textEncriptado = textEncriptado.split(sustitucion.buscar).join(sustitucion.reemplazo);
                }
            });
        } else if (tipo == 2) {
            var sustituciones = [
                { buscar: 'ai', reemplazo: 'a' },
                { buscar: 'enter', reemplazo: 'e' },
                { buscar: 'imes', reemplazo: 'i' },
                { buscar: 'ober', reemplazo: 'o' },
                { buscar: 'ufat', reemplazo: 'u' }
            ];
        
            // Itera sobre cada sustitución
            sustituciones.forEach(sustitucion => {
                // Solo realiza la sustitución si el carácter está presente en el texto
                if (texto.includes(sustitucion.buscar)) {
                    textEncriptado = textEncriptado.split(sustitucion.buscar).join(sustitucion.reemplazo);
                }
            });
        }    
    } else {
        alert("Solamente se permiten letras minisculas");
    }

    if (textEncriptado == texto) {
        textEncriptado = ""
    }
    return textEncriptado;
}