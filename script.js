const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

cells.forEach(function(cell,index){
    cell.addEventListener("click",function(){
        if(board[index] !== "" || gameover) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = "Player" + currentPlayer + "'s Turn";
    })
})

