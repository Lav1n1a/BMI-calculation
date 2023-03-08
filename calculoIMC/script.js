function calcular(){
    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;
    const resultado = document.querySelector('span');

    resultado.style.backgroundColor = 'rgba(233, 61, 61, 0.685)';

    const imc = peso /(altura * altura);

    if(imc <= 18.5){
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} : Abaixo do peso`;
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} : Peso normal`;
    }else if(imc >= 25 && imc <= 29){
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} : Sobrepeso`;
    }else if(imc >= 30 && imc <= 40){
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} : Acima do peso`;
    }else{
        alert('Adicione um número');
    }

}


