document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var password = document.getElementById('password').value;
        
        // Verifica a senha. Substitua 'senha123' com a senha desejada
        if (password === '43690') {
            var expirationTime = new Date().getTime() + (10 * 1 * 1000); // 10 segundos de expiração
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('expiration', expirationTime);
            window.location.href = 'index.html';
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });

    // Redireciona para index.html se já estiver autenticado e a sessão não estiver expirada
    var authenticated = localStorage.getItem('authenticated');
    var expiration = localStorage.getItem('expiration');
    if (authenticated === 'true' && new Date().getTime() < expiration) {
        window.location.href = 'index.html';
    }
});

