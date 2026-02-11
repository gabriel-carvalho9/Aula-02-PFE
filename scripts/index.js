function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if (idade >= 16 && nivel > 5){
    mensagem.innerText = "Inscrição aceita. Categoria PRO";
    mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagem.innerText = "Incrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else {
        mensagem.innerText = "Incrição negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
    }
}

function validarSenha() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagem = document.getElementById("mensagem-desafio1");

    if (senha1.length >= 8){
        if (senha1 == senha2){
            mensagem.innerText = "Senha Válida";    
            mensagem.style.color = "green";
        }else if (senha1 != senha2){
                mensagem.innerText = "Senha Incorreta";
                mensagem.style.color = "red";
            }
    }else if(senha1,length < 8){
        mensagem.innerText = "Senha Inválida";
        mensagem.style.color = "red";
    }
}

function validarDesconto() {
    const idade = document.getElementById("idade2").value;
    const estudante = document.getElementById("estudante");
    const naoEstudante = document.getElementById("nao-estudante");
    const mensagem = document.getElementById("mensagem-desafio2");

    if (idade >= 60 || estudante == true){
        mensagem.innerText = "Desconto aplicado!";
        mensagem.style.color = "green";
    }else if (idade < 60 || naoEstudante == true){
        mensagem.innerText = "Desconto não aplicado";
        mensagem.style.color = "red";
    }    
}

function verificar(){
    const nome = document.getElementById("nome2").value;
    const idade = document.getElementById("idade3").value;
    const mensagem = document.getElementById("mensagem-desafio3");

    if (nome > 0 || idade > 0 ){
        mensagem.innerText = "Cadastro Concluído!";
        mensagem.style.color = "green";
    }else if (nome == ""){
        mensagem.innerText = "Error"
        mensagem.style.color = "red"
    }else if (idade =="")
        mensagem.innerText = "Error"
        mensagem.style.color = "red"
    }