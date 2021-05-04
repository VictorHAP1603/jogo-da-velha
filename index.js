const buttonPlay = document.querySelector('[data-jogo="inicia"]')
const buttonReset = document.querySelector('[data-jogo="recomeca"]')

const jogo_da_velha = {
    areaDoGame: null,
    fields_of_game: ['', '', '', '', '', '', '', '', ''], 
    player_simbol: {
        options: ['X', 'O'],
        player: 0,
        changePlayer: function() {
            this.player = this.player === 0 ? 1 : 0;
        }
    },
    gameover: false,
    plays_with_victory: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3 ,6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ],

    init(container) {
        this.areaDoGame = document.querySelector(container)
        this.draw();
    }, 

    make_play(position) {
        if (this.gameover) return false;
        if (this.fields_of_game[position] === '') {
            this.fields_of_game[position] = this.player_simbol.options[this.player_simbol.player]
            this.draw();
            this.check_victory(this.player_simbol.options[this.player_simbol.player])
            this.player_simbol.changePlayer();
        }
    },

    check_victory(simbol) {
        for (i in this.plays_with_victory) {    
            if( this.fields_of_game[ this.plays_with_victory[i][0] ] === simbol &&
                this.fields_of_game[ this.plays_with_victory[i][1] ] === simbol &&
                this.fields_of_game[ this.plays_with_victory[i][2] ] === simbol) {
                    this.gameover = true;
                    
                    for ( field in this.plays_with_victory[i] ) {
                        this.areaDoGame.children[this.plays_with_victory[i][field]].classList.add('winner')
                    }
            }
        }
    },

    reset_game() {
        this.areaDoGame.innerHTML = '';
        this.gameover = false;
        this.fields_of_game = ['', '', '', '', '', '', '', '', '']
    },

    draw() {
        let field = '';
        
        for ( i in this.fields_of_game ) {
            field += `<div onclick="jogo_da_velha.make_play(${i})">${this.fields_of_game[i]}</div>`
        }
        console.log(this.areaDoGame)
        this.areaDoGame.innerHTML = field
    }
}

buttonPlay.addEventListener('click', () => jogo_da_velha.init('.area-game'))
buttonReset.addEventListener('click', () => jogo_da_velha.reset_game())
