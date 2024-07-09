
const botonEncriptar = document.querySelector('.encriptar');
const botonDesencriptar = document.querySelector('.desencriptar');
const botonCopiar = document.querySelector('.copy');
//se trae el elmento que estará a la espera del evento y se re torna una función
document.querySelector('.input__usuario').addEventListener('input', function() {
    const inputText = this.value;
    
    const outputContainer = document.querySelector('.content__output');
    //se valida el estado del campo para y segun este, se inserta un código en el contenedor
    if (inputText === '') {
        outputContainer.innerHTML = `
            <div class="content__img">
                <img src="../assets/Muñeco.png" alt="Muñeco con lupa" class="Muñeco">
                <h1>No se ha encontrado texto</h1>
                <p>•Por favor ingrese texto para encriptar o desencriptar</p>
            </div>
        `;
    } else {
        outputContainer.innerHTML =`<textarea name="" class="copy__text">${inputText}</textarea>
                                    <button class="copy" onclick="myFunction()">copiar</button>`;
        const outputField = document.querySelector('.copy__text');
        outputField.value = inputText;
        
    }
});

//funcion que convierte las llaves de encriptación
function encriptado(text){
    return text.replace(/i/g,'imes')
                .replace(/e/g,'enter')
                .replace(/a/g,'ai')
                .replace(/o/g,'ober')
                .replace(/u/g,'ufat');          
}
//función que desencripta las llaves
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

botonDesencriptar.addEventListener('click', function(){
    const outputField = document.querySelector('.copy__text');

    if (outputField) {
        outputField.value = desencriptar(outputField.value);
    }
});

function myFunction() {
    // Get the text field
    const copyText = document.querySelector('.copy__text');
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}  








