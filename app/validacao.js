function validaSeOChutePossuiUmValorValido(chute) {
    const numero =+ chute;  

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor Inválido </div>';
        return;
    }
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> Valor inválido: fale um número entre 
        ${menorValor} e ${maiorValor} </div>
        `
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1> Você Acertou!!! </h1>
        <h3> O Numero Secreto era o ${numeroSecreto} </h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `        
    } else {
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
    
}
