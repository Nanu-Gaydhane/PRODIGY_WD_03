let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');

function placeMarker(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        cells[row * 3 + col].innerText = currentPlayer;
        
        if (checkWin()) {
            turnDisplay.innerText = `Player ${currentPlayer} wins!`;
            disableClicks();
        } else if (checkTie()) {
            turnDisplay.innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            turnDisplay.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }
    return false;
}

function checkTie() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    turnDisplay.innerText = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff';
        cell.style.pointerEvents = 'auto';
    });
}

function disableClicks() {
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}
