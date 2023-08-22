function calc(operator) {
    let elementoNumero1 = parseInt(document.getElementById("primerNumero").value);
    let elementoNumero2 = parseInt(document.getElementById("segundoNumero").value);

    if (operator == 'suma') {
        suma(elementoNumero1,elementoNumero2)
    }else if (operator == 'resta') {
        resta(elementoNumero1,elementoNumero2)
    }else if (operator == 'multi') {
        multi(elementoNumero1,elementoNumero2)
    }else if (operator == 'divide') {
        divide(elementoNumero1,elementoNumero2)
    }else if (operator == 'potencia') {
        potencia(elementoNumero1,elementoNumero2)
    }else if (operator == 'raiz') {
        raiz(elementoNumero2)
    }else if (operator == 'abs') {  
        abs(elementoNumero2)
    }else if (operator == 'rand') {
        rand(elementoNumero1,elementoNumero2)
    }
}

function suma(num1, num2) {
    let resultado = num1 + num2;
    mostrarResultado(resultado);  
}

function resta(num1, num2) {
    let resultado = num1 - num2;
    mostrarResultado(resultado);
}

function multi(num1, num2) {
    let resultado = num1 * num2;
    mostrarResultado(resultado);
}

function divide(num1, num2) {
    let resultado = num1 / num2;
    mostrarResultado(resultado);      
}

function potencia(num1, num2) {
    let resultado = Math.pow(num1,num2);
    mostrarResultado(resultado);      
}

function raiz(num) {
    let resultado = Math.sqrt(num);
    mostrarResultado(resultado);      
}

function abs(num2) {
    let resultado = Math.abs(num1,num2);

    mostrarResultado(resultado);      
}

function rand(min, max) {
    max = max + 1;
    let resultado = Math.random() * (max - min) + min;
    mostrarResultado(resultado);      
}

function round(info){
    let elementoTexto = document.getElementById("resultado");
    if (info == 'floor') {
        result = Math.floor(+elementoTexto.textContent)
    }else if (info == 'ceil') {
        result = Math.ceil(+elementoTexto.textContent)
    }else{
        result = Math.round(+elementoTexto.textContent)
    }
    elementoTexto.textContent = result.toString();
}

function mostrarResultado(result) {
    let elementoTexto = document.getElementById("resultado");
    elementoTexto.textContent = result.toString();
}