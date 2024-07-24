document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores do formulário
    //var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validação simples (usuário e senha hardcoded)
    //if (username === 'suporte' && password === '43690') 
    if (password === '43690'){
        //alert('Login bem-sucedido!');
        // Aqui você pode redirecionar o usuário para outra página ou fazer outra ação desejada
        window.location.href = 'index.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
