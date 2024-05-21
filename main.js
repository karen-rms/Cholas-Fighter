let board = document.getElementById('board');

let banano = new Banano (300,400);

let bananoEnemy= new BananoEnemy(800,400);

let timerMovePlayer;

let timerMovePlayer2;

function startGame() {
    banano.insertBanano()
    bananoEnemy.insertBananoEnemy()
    timerMovePlayer = setInterval(() => banano.move(), 10) //esto hace que se mueva el jugador1
    timerMovePlayer2= setInterval(() => bananoEnemy.move(), 10) //esto hace que se mueva el jugador2
}

window.addEventListener("keydown",function(e){
    switch (e.key){
        case 'a':
            banano.direction=-1
            break
        case 'd':
            banano.direction=1
            break
        /*Iria el case del ataque de banano */
        case 'ArrowRight':
            bananoEnemy.direction=1
            break
        case 'ArrowLeft':
            bananoEnemy.direction=-1
            break
    }
}
)

window.addEventListener('keyup', function (e) { //esto hace que se quede quieto el pj dsps de clicar 1 vez
    banano.direction = 0;
    bananoEnemy.direction=0;
})

startGame()