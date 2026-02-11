function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >= 16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagem.innerText = "Incrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else{
        mensagem.innerText = "Incrição negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
    }
}