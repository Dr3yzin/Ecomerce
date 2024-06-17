function verMais(){

    const barraDescricao = document.getElementById('paragrafo-descritivo');
    var descricao = window.getComputedStyle(barraDescricao).getPropertyValue('height');
    const tamnaho = barraDescricao.scrollHeight + 'px';
    const mensagemBotao = document.getElementById('ver-mais');

    if(descricao === '150px'){
        barraDescricao.style.height = tamnaho;
        mensagemBotao.innerText = 'Ver menos';
    }
    else{
        barraDescricao.style.height = '150px';
        mensagemBotao.innerText = 'Ver mais';
    }
}

function validarQtde(input){

    var qtde = parseFloat(input.value);

    if(qtde < 1){
        input.value = 1;
    }

}

function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}