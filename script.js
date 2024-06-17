
const imagens = document.querySelectorAll('.opcao-imagem');


function mudarFundo(){

  var fundo = window.getComputedStyle(document.body).getPropertyValue('background-color');
  const barra = document.getElementById('barra')

  if (fundo === 'rgb(255, 255, 255)'){
    document.body.style.color = "Yellow"
    barra.style.color = "Yellow";
    document.body.style.backgroundColor = "black";
    barra.style.backgroundColor = "#FFDC17";

  }
  else{
    document.body.style.color = "Black"
    barra.style.color = "Black";
    document.body.style.background = "White";
    barra.style.backgroundColor = "#003F91";
  }
    
}

function trocarImagens(){
  const imagem = this.querySelector('img');

  const src = imagem.getAttribute('src');

  const amostra = document.getElementById('imagem-amostra');

  amostra.setAttribute('src', src);

}

imagens.forEach(botao => {
  botao.addEventListener('click', trocarImagens);
});

function checkout(){
  window.location.href = "./checkout.html";
}

function formatoTell(input) {
  var valor = input.value.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2'); 
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2'); 

  input.value = valor;
}

function soNumero(input){
  var valor = input.value.replace(/\D/g, '');

  input.value = valor;
}

function formatoCPF(input) {
  var valor = input.value.replace(/\D/g, '');
  
  if (valor.length > 3 && valor.length <= 6) {
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  } else if (valor.length > 6 && valor.length <= 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
  } else if (valor.length > 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  }

  input.value = valor;
}