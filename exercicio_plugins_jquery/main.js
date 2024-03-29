$(document).ready(function() {
    // Aplicar máscara aos campos
    $('#cpf').mask('000.000.000-00');
    $('#phone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    // Adicionar evento de envio do formulário
    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Impedir envio padrão do formulário

        // Aqui você pode adicionar lógica para enviar os dados, se necessário

        alert('Cadastro enviado com sucesso!');
    });
});