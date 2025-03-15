//menu hamburguer
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger')
    const menu = document.getElementById('menu')

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active')
    })
})

//dropdown
function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('show')
}

// Fechar dropdown ao clicar fora
document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('dropdownMenu')
    if (!event.target.matches('.dropdown-btn')) {
        dropdown.classList.remove('show')
    }
})

// Função para abrir e fechar o menu de filtros
function toggleFiltro() {
    let menu = document.getElementById('menuFiltros')
    let icone = document.getElementById('iconeFiltro')
    let overlay = document.getElementById('overlay')

    if (menu.style.right === '0px') {
        menu.style.right = '-100%'
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-plus')
        overlay.classList.remove('ativo')
    } else {
        menu.style.right = '0px'
        icone.classList.remove('fa-plus')
        icone.classList.add('fa-xmark')
        overlay.classList.add('ativo')
    }
}

// Fechar o menu ao clicar no overlay
document.getElementById("overlay").addEventListener("click", function () {
    toggleFiltro();
});

// Verifica se os botões precisam ser exibidos
function verificarFiltrosAbertos() {
    let filtrosAbertos = document.querySelectorAll('.filtro-opcoes.aberto').length > 0
    let botoesFiltros = document.querySelector('.botoes-filtros')

    // Se pelo menos um filtro estiver aberto, exibe os botões
    if (filtrosAbertos) {
        botoesFiltros.style.display = 'flex'
    } else {
        botoesFiltros.style.display = 'none'
    }
}

// Função para abrir e fechar filtros individuais
function toggleCategoria(element) {
    let opcoes = element.nextElementSibling
    let icone = element.querySelector('i')

    opcoes.classList.toggle('aberto')

    if (opcoes.classList.contains('aberto')) {
        icone.classList.remove('fa-plus')
        icone.classList.add('fa-minus')
        opcoes.style.display = 'block'
    } else {
        opcoes.style.display = 'none'
        icone.classList.remove('fa-minus')
        icone.classList.add('fa-plus')
    }

    verificarFiltrosAbertos() // Verifica se deve exibir os botões
}

// Função para abrir/fechar menu de cores e alternar ícone
function toggleCores() {
    let menuCores = document.querySelector('.filtro-opcoes.cores')
    let icone = document.querySelector('.titulo-cor i')

    menuCores.classList.toggle('aberto')

    // Alternar ícone '+' e '-'
    if (menuCores.classList.contains('aberto')) {
        icone.classList.remove('fa-plus')
        icone.classList.add('fa-minus')
    } else {
        icone.classList.remove('fa-minus')
        icone.classList.add('fa-plus')
    }

    verificarFiltrosAbertos() // Verifica se deve exibir os botões
}

// Evento para abrir/fechar ao clicar no título 'COR'
document.querySelector('.titulo-cor').addEventListener('click', toggleCores)
