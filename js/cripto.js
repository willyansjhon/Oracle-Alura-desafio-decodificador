function codifica(texto) {
    var caracteres = texto.value.split("");

    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "32";

        } else if(item == "e") {
            caracteres[i] = "66";

        } else if(item == "i") {
            caracteres[i] = "222";

        } else if(item == "o") {
            caracteres[i] = "99";

        } else if(item == "u") {
            caracteres[i] = "177";

        } else if(item == "b") {
            caracteres[i] = "29";

        } else if(item == "c") {
            caracteres[i] = "00";

        } else if(item == "d") {
            caracteres[i] = "44";

        } else if(item == "t") {
            caracteres[i] = "72";

        }else if(item == "w"){
            caracteres[i] = "9";

        }else if(item == "l"){
            caracteres[i] = "8";

        }else if(item == "y"){
            caracteres[i] = "09";
            
        }else if(item == "n"){
            caracteres[i] = "01";
            
        }else if(item == "s"){
            caracteres[i] = "0";
            
        };

    })
    return caracteres.join("");
}

function decodifica(texto) {
    var codigo = [["a", "32"], ["e", "66"], ["i", "222"], ["o", "99"], ["u", "177"], ["b", "29"], ["c", "00"], ["d", "44"], ["t", "72"],["w","9"],["l","8"],["y","09"],["n","01"],["s","0"]];
    texto = texto.value;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
}

function escreveCodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto);
}

function escreveDecodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodifica(inputTexto);
}

var inputTexto = document.querySelector(".input-texto");
var resultado = document.querySelector(".resultado");

var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");

var mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}