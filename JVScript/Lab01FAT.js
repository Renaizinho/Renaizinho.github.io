let numero = document.getElementById('num')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

botao.addEventListener('click',function(){
    var valor = parseInt(numero.value);
    for (var i=1;i<parseInt(numero.value);i++){
        valor *= i;
    }
    resultado.value = valor;
})