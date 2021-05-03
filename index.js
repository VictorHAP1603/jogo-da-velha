
const areaDoGame = document.querySelector('.area-game')
const jogadas = ['X', 'O']
let player = 0

let jogadasComVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3 ,6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

function fazAJogadaNoClique({currentTarget}) {
    currentTarget.classList.add('indisponivel')
    if (player === 1) {
        currentTarget.innerHTML = jogadas[player]
        currentTarget.dataset.jogada="O"
        verificarSeGanhou();
        player = 0
    } else {
        currentTarget.innerHTML = jogadas[player]
        currentTarget.dataset.jogada="X"
        verificarSeGanhou();
        player = 1
    }
    camposJogaveis();
}

function verificarSeGanhou() {
    let campos = [];
    let jogadasValidas = [];
    const campoPreenchido = [...areaDoGame.children].forEach((item, index)=> {
        if (item.innerHTML === jogadas[player]) {
            campos.push(index);
        }
    })
}

function camposJogaveis() {
    let camposDeJogo = document.querySelectorAll('.area-game div:not(.indisponivel)')
    camposDeJogo.forEach(c => c.addEventListener('click', fazAJogadaNoClique))

    let camposIndisponiveis = document.querySelectorAll('.area-game div.indisponivel')
    camposIndisponiveis.forEach(c => c.removeEventListener('click', fazAJogadaNoClique))
}
verificarSeGanhou();
camposJogaveis();