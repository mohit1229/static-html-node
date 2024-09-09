document.getElementById('signup-btn').addEventListener('click', function() {
    document.querySelector('.form-container').style.transform = 'translateX(-50%)';
    document.querySelector('.signup-form').style.opacity = '1';
    document.querySelector('.login-form').style.opacity = '0';
    document.getElementById('login-btn').classList.remove('active');
    document.getElementById('signup-btn').classList.add('active');
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.querySelector('.form-container').style.transform = 'translateX(0)';
    document.querySelector('.signup-form').style.opacity = '0';
    document.querySelector('.login-form').style.opacity = '1';
    document.getElementById('signup-btn').classList.remove('active');
    document.getElementById('login-btn').classList.add('active');
});