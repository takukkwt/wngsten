document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 正しいユーザー名とパスワード
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'ユーザー名またはパスワードが違います';
    }
});
