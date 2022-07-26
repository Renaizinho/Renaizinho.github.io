function obtemValor(seletor) {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value)) ? 0 : parseFloat(val.value)
    val.value = ""
    return num
}

function escreveValor(seletor, valor) {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

// Questao 1
const botao1 = document.querySelector(".calcula1")

function somar(num1, num2) {
    return num1 + num2;
}

botao1.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao1num1")
    const num2 = obtemValor("#questao1num2")

    escreveValor("#resposta01", somar(num1, num2))
})

// Questao 2
const botao2 = document.querySelector(".calcula2")

function maioroumenor(num1, num2){
    let txt;
    if(num1 > num2)
        txt = "O número "+num1+" é maior que o "+num2;
    else if(num1 < num2)
        txt = "O número "+num2+" é maior que o "+num1;
    else
    txt = "São iguais";
    return txt;      
}

botao2.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao2num1")
    const num2 = obtemValor("#questao2num2")

    escreveValor("#resposta02", maioroumenor(num1, num2))
})

// Questao 3
const botao3 = document.querySelector(".calcula3")

function Nprimo(num1){
    let resultado = 0, txt, aux;
    for(aux = 2; aux < num1; aux++){
        if(num1 % aux == 0){
            resultado++;
            break;
        }
    }
    if(resultado > 0){
        txt = "O número "+num1+" não é primo"
    }
    else
        txt = "O número "+num1+" é primo"
    return txt;
}

botao3.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao3num1")

    escreveValor("#resposta03", Nprimo(num1))
})

// Questao 4
const botao4 = document.querySelector(".calcula4")

function hipo(num1, num2){
    let r = Math.pow(num1,2);
    r = r + Math.pow(num2,2);
    r = Math.sqrt(r,2);
    return r;
}

botao4.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao4num1")
    const num2 = obtemValor("#questao4num2")

    escreveValor("#resposta04", hipo(num1, num2))
})

// Questao 5
const botao5 = document.querySelector(".calcula5")

function reajusteSalarial(num1, num2){
    let r = num1;
    r = r + num1*num2;
    return r;
}

botao5.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao5num1")
    const num2 = obtemValor("#questao5num2")

    escreveValor("#resposta05", reajusteSalarial(num1, num2))
})

// Questao 6
const botao6 = document.querySelector(".calcula6")

function custoFinal(num1){
    let r = 0.28*num1 + 0.45*num1 + num1;
    return r;
}

botao6.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao6num1")

    escreveValor("#resposta06", custoFinal(num1))
})

// Questao 7
const botao7 = document.querySelector(".calcula7")

function salarioFinal(num1, num2, num3, num4){
    let r = num3 + num4*num1 + 0.05*num2;
    return r;
}

botao7.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao7num1")
    const num2 = obtemValor("#questao7num2")
    const num3 = obtemValor("#questao7num3")
    const num4 = obtemValor("#questao7num4")

    escreveValor("#resposta07", salarioFinal(num1, num2, num3, num4))
})

// Questao 8
const botao8 = document.querySelector(".calcula8")

function Celc(num1){
    let r = (num1 - 32)/9;
    r = r * 5;
    return r;
}

botao8.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao8num1")

    escreveValor("#resposta08", Celc(num1))
})

// Questao 9
const botao9 = document.querySelector(".calcula9")

function mediaFinal(num1, num2, num3){
    let r = (num1*2 + num2*3 + num3*5)/10
    return r;
}

botao9.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao9num1")
    const num2 = obtemValor("#questao9num2")
    const num3 = obtemValor("#questao9num3")

    escreveValor("#resposta09", mediaFinal(num1, num2, num3))
})

// Questao 10
const botao10 = document.querySelector(".calcula10")

function Nmacas(num1){
    let r;
    if(num1 < 12)
        r = num1*1.3;
    else
        r = num1*1;
    return r;
}

botao10.addEventListener("click", () => {
    
    const num1 = obtemValor("#questao10num1")

    escreveValor("#resposta10", Nmacas(num1))
})