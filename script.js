function navegar(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-saudacao');
    if (btn) {
        btn.addEventListener('click', () => {
            btn.textContent = "Bem-vindo ao meu mundo de código!";
            btn.style.background = "#1e40af";
            btn.style.cursor = "default";
        });
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência no navegador
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

function navegar(url) {
    window.location.href = url;
}