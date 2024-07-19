
const botonEncriptar = document.querySelector('.encriptar');
const botonDesencriptar = document.querySelector('.desencriptar');
const botonCopiar = document.querySelector('.copy');
const inputUsuario = document.querySelector('.input__usuario');
const outputContainer = document.querySelector('.conteiner__output');

// Actualizar la altura del contenedor según el contenido del campo de entrada
inputUsuario.addEventListener('input', function() {
    const inputText = this.value;
    
    const outputDiv = document.querySelector('.content__output');
    if (inputText === '') {
        outputContainer.classList.remove('enlarged');
        outputDiv.innerHTML = `
            <div class="content__output">
                <div class="content__img">
                    <img src="../assets/Muñeco.png" alt="Muñeco con lupa" class="Muñeco">
                    <div class="pie__foto">
                        <h1>No se ha encontrado texto</h1>
                        <p>•Por favor ingrese texto para encriptar o desencriptar</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        outputContainer.classList.add('enlarged');
        outputDiv.innerHTML = `
            <textarea name="" class="copy__text">${inputText}</textarea>
            <button class="copy" onclick="myFunction()">copiar</button>
        `;
        const outputField = document.querySelector('.copy__text');
        outputField.value = inputText;
    }
});

// Función que convierte las llaves de encriptación
function encriptado(text){
    return text.replace(/i/g,'imes')
                .replace(/e/g,'enter')
                .replace(/a/g,'ai')
                .replace(/o/g,'ober')
                .replace(/u/g,'ufat');          
}

// Función que desencripta las llaves
function desencriptar(text){
    return text.replace(/enter/g,'e')
                .replace(/ai/g,'a')
                .replace(/imes/g,'i')
                .replace(/ober/g,'o')
                .replace(/ufat/g,'u');
}

// Evento para el botón "Encriptar"
botonEncriptar.addEventListener('click', function() {
    const outputField = document.querySelector('.copy__text');

    if (outputField) {
        outputField.value = encriptado(outputField.value);
    }
});

// Evento para el botón "Desencriptar"
botonDesencriptar.addEventListener('click', function(){
    const outputField = document.querySelector('.copy__text');

    if (outputField) {
        outputField.value = desencriptar(outputField.value);
    }
});

function myFunction() {
    const copyText = document.querySelector('.copy__text');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
}