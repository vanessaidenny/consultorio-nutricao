var PESOMAXIMO = 1000;
var PESOMINIMO = 0;
var ALTURAMAXIMA = 3.00;
var ALTURAMINIMA = 0;

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso); //boolean
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-pesoInvalido")
    }
    if(!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-alturaInvalida")
    }
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso>=PESOMINIMO && peso<PESOMAXIMO){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura>=ALTURAMINIMA && altura<ALTURAMAXIMA){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}