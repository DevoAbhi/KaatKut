let origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
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
    turn(square.target.id, aiPlayer);
}

const turn = (squareId, player) => {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}

startGame();