const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

cells.forEach(function(cell,index){
    cell.addEventListener("click",function(){
        if(board[index] !== "" || gameOver) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = "Player" + currentPlayer + "'s Turn";
        checkWinner();
    })
})

const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];

    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      status.textContent = "Player " + board[a] + " wins!";
      gameOver = true;
      return;
    }
  }
  if (!board.includes("")) {
    status.textContent = "It's a draw!";
    gameOver = true;
  }
}

restartBtn.addEventListener("click", function() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  status.textContent = "Player X's turn";
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
});
