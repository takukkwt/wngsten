document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 正しいユーザー名とパスワード
    const correctUsername = 'user';
    const correctPassword = 'user74';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'ユーザー名またはパスワードが違います';
    }
});
