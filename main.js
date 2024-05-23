let board = document.getElementById('board');

let banano = new Banano (300,400);

let bananoEnemy= new BananoEnemy(800,400);

let bananoHeart1 =document.getElementById('heartBanano1');
let bananoHeart2 = document.getElementById('heartBanano2');
let bananoHeart3 = document.getElementById('heartBanano3');
let bananoHeart4 = document.getElementById('heartBanano4');
let bananoHeart5 = document.getElementById('heartBanano5');

let bananoEnemyHeart1 = document.getElementById('heartBananoEnemy1');
let bananoEnemyHeart2 = document.getElementById('heartBananoEnemy2');
let bananoEnemyHeart3 = document.getElementById('heartBananoEnemy3');
let bananoEnemyHeart4 = document.getElementById('heartBananoEnemy4');
let bananoEnemyHeart5 = document.getElementById('heartBananoEnemy5');

let timerMovePlayer;

let timerMovePlayer2;

let startScreen = document.getElementById('start');
let startButton = document.getElementById('start-button');
let credits = document.getElementById('credits-button');


function startGame() {
    banano.insertBanano()
    bananoEnemy.insertBananoEnemy()
    timerMovePlayer = setInterval(() => banano.move(), 3) //esto hace que se mueva el jugador1
    timerMovePlayer2= setInterval(() => bananoEnemy.move(), 3) //esto hace que se mueva el jugador2

}

window.addEventListener("keydown",function(e){
    switch (e.key){
        case 'a':
            banano.direction=-1
            break
        case 'd':
            banano.direction=1
            break
        case 'w':
            banano.attack()
            break
        case 'ArrowRight':
            bananoEnemy.direction=1
            break
        case 'ArrowLeft':
            bananoEnemy.direction=-1
            break
        case 'ArrowUp':
            bananoEnemy.attack()
            break
    }
}
)

window.addEventListener('keyup', function (e) { //esto hace que se quede quieto el pj dsps de clicar 1 vez
    banano.direction = 0;
    bananoEnemy.direction=0;
})

/*function colission(){
    if(bananoColission<=bananoEnemyX){
        banano.direction=0;
    }
}*/

startGame()
