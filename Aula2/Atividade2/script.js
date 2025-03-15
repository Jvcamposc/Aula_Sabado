//ação do botão
var contador = document.getElementById('Contador');
var incrementar = document.getElementById('incrementar');
var decrementar = document.getElementById('decrementar');
let contagem = 0;

incrementar.addEventListener('click', function () {
    contagem++;
    contador.textContent = contagem;
});
decrementar.addEventListener('click', function () {
    if (contagem > 0) {
        contagem--;
        contador.textContent = contagem;
    } else {
        alert("Contagem não pode ser negativa");
    }
});

//Adicionar Texto dinamico

var inputTexto = document.getElementById('inputText');
inputTexto.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var text = inputTexto.value.trim();

        if (text !== '') {
            var novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = text;

            document.getElementById('output').appendChild(novoParagrafo);
            inputTexto.value = '';
        }
    }
});

//Contador de caracteres

var texto = document.getElementById('texto');
var ContadorCaracter = document.getElementById('ContadorCaracter');

contador.innerHTML = "0 / 100";
texto.addEventListener('input', function () {
    var textoDigitado = texto.value.replace(/\s/g, '');
    var tamanhoTexto = textoDigitado.length;
    ContadorCaracter.textContent = `${tamanhoTexto} / 100`;
});

//Adicionar novo item a lista


//Botão de resetar
function buttonReset() {
    document.getElementById("formulario").reset();
    alert("Formulário resetado");
}



