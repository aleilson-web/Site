// Seleciona o botão do menu e o menu
const btnMenu = document.querySelector('.btn-menu');
const menuAtivo = document.querySelector('.menu-ativo');

// Adiciona um evento de clique ao botão do menu
btnMenu.addEventListener('click', function() {
    // Alterna a classe 'ativo' no menu
    menuAtivo.classList.toggle('ativo');
});

