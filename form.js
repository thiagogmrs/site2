const formulario = document.querySelector('form');
formulario.addEventListener('submit', enviarFormulario);

function formularioEnviado(resposta){
    if(resposta.ok){
    formulario.innerHTML = "<p><span style='color:#317a00';>Sua mensagem foi enviada com sucesso</span>, Em breve entrarei em contato com você. Obrigado!</p>"
    }
    else{
    formulario.innerHTML = "<p><span style='color:#FF0000; text-align: center;'>Sua mensagem não foi enviada</span>, Entre em contato diretamente pelo email em: contato@despachanterodrigo.com.br</p>"
    }
}

 function enviarFormulario (event){
    event.preventDefault();
    botao = document.querySelector('.btn-envio');
    botao.disabled = true;
    botao.innerText = 'Enviando...';
    
    const data = new FormData(formulario);

    fetch("./enviar.php",{
        method: "POST",
        body: data,
    }).then(formularioEnviado);
 }
