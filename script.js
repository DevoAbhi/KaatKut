let origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
let currPlayer = huPlayer;
const winComb = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');


const startGame = () => {
    document.querySelector('.endgame').style.display = "none";
    origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for(let i = 0; i< 9; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

const turnClick = (square) => {
    turn(square.target.id, currPlayer );
}

const turn = (squareId, player) => {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;

    let gameWon = checkWin(origBoard, player);
    if(gameWon) gameOver(gameWon);

    if(currPlayer === huPlayer) currPlayer = aiPlayer;
    else currPlayer = huPlayer;
}

const checkWin = (board, player) => {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []
    );

    let gameWon = null;
    for(let i = 0; i< winComb.length; i++) {
        if(winComb[i].every(num => plays.indexOf(num) != -1)) {
            gameWon = {index: i, player: player};
            break;
        }
    }
    return gameWon;
}

const gameOver = (gameWon) => {
    for(let i of winComb[gameWon.index]) {
        document.getElementById(i).style.backgroundColor = (gameWon.player === huPlayer) ? "pink" : "red";
    }

    for(let i = 0; i< cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
}

startGame();