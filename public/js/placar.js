function novaLinha(usuario, palavras ) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaNumPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")
    
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaNumPalavras);
    linha.append(colunaRemover);
    return linha;
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#'class='botao-remover'><i class='small material-icons icones botao-remover'>delete</i></a>";

    var usuario = "Felipe";
    var linha =  novaLinha(usuario, numPalavras)
    linha.find(".botao-remover").click(removeLinha)
    corpoTabela.prepend(linha);
}


function removeLinha() {
    console.log("funcao remover")
    $(".botao-remover").click(function(event) {
        event.preventDefault()
        $(this).parent().parent().remove();
    })
}