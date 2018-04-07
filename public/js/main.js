var tempoInicial = $("#tempo-digitacao").text();
var campoDigitacao = $(".campo-digitacao");
var frase = $(".frase").text();

$(function () { // Atalho para document).ready(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    reiniciarJogo();
    inicializaMarcadoresBordas();
    remover(); 
    $("#btn-reiniciar").click(reiniciarJogo);
});

function atualizaTamanhoFrase() {
    var frase    = $(".frase").text();
    var qtdPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase").text(qtdPalavras);

}

function inicializaContadores() {
    var campoDigitacao = $(".campo-digitacao");
    campoDigitacao.on("input", function(){
        var conteudo = campoDigitacao.val()
        $("#contador-palavras").text(conteudo.split(/\S+/).length - 1);
        $("#contador-caracteres").text(conteudo.length);

    });

}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    
    
    campoDigitacao.one("focus", function() {
        var cronometroID = setInterval(function(){
            
            $("#tempo-digitacao").text(tempoRestante--);
            
            if(tempoRestante < 0) {
                clearInterval(cronometroID)
                finalizaJogo()
            }

        },1000)  // Tempo em milisegundos  

    });
}


function reiniciarJogo() {
    $(".campo-digitacao").attr("disabled", false);
    $(".campo-digitacao").val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    $(".campo-digitacao").removeClass("campo-desativado");
    campoDigitacao.removeClass("digitacao-correta");
    campoDigitacao.removeClass("digitacao-errada");
    inicializaCronometro();
}

function inicializaMarcadoresBordas() {
    
    campoDigitacao.on("input", function(){
        var digitado = campoDigitacao.val();
        var comparavel = frase.substr(0,digitado.length)
        if (comparavel == digitado) {
            campoDigitacao.addClass("digitacao-correta")
            campoDigitacao.removeClass("digitacao-errada")
        } else {
            campoDigitacao.addClass("digitacao-errada")
            campoDigitacao.removeClass("digitacao-correta")
        }
    
    });
}

function finalizaJogo() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("campo-desativado")
    inserePlacar();
}




