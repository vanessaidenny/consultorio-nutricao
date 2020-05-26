var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    var form = document.querySelector("#form-adiciona");
    var paciente = extraiInfoForm(form);

    var erros = validaPaciente(paciente);
    if(erros.length>0){
        exigeMsgsErro(erros);
        return;
    }

    addPacienteTabela(paciente);
    
    form.reset();
    var msgsErro = document.querySelector("#msgs-erro");
    msgsErro.innerHTML = "Paciente incluído com sucesso!";
});

function addPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function extraiInfoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0) erros.push("Preencher nome");
    if(paciente.peso.length == 0) erros.push("Preencher peso");
    if(paciente.altura.length == 0) erros.push("Preencher altura");
    if(paciente.gordura.length == 0) erros.push("Preencher gordura");
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");
    return erros;
}

function exigeMsgsErro(erros){    
    var ul = document.querySelector("#msgs-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}