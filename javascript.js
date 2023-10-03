const GameBoard = (function(){
    let board = ["","","","","","","","",""];
    
    const renderBoard = () => {
        //Clears the previous board
        const main = document.querySelector('main');
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        board.forEach((symbol, index) => {
            //Creates gameboard squares
            let boardSquare = document.createElement('div');
            boardSquare.classList.add('boardSquare');
            boardSquare.setAttribute('id', `square-${index}`);
            boardSquare.textContent = `${symbol}`;
            boardSquare.addEventListener('click', Game.handleClick);
            main.appendChild(boardSquare);
        });
    }

    const update = (index, value) => {
        board[index] = value;
        renderBoard();
    }

    const getGameboard = () => board;

    return {
        renderBoard,
        update,
        getGameboard
    }
})();

const createPlayer = (name, symbol) => {
    return {
        name,
        symbol
    }
}

const Game = (function(){
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const handleClick = function(event) {
        let index = parseInt(event.target.id.split("-")[1]);
        if (GameBoard.getGameboard()[index] !== "") {
            return;
        }
        GameBoard.update(index, players[currentPlayerIndex].symbol);
        if (checkForWin(GameBoard.getGameboard(), players[currentPlayerIndex].symbol)) {
            gameOver = true;
            alert(`${players[currentPlayerIndex].name} won!`)
        }  else if (checkForTie(GameBoard.getGameboard())) {
            gameOver = true;
            alert(`It's a tie!`);
        }
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const start = () => {
        players = [
            createPlayer(document.querySelector('#playerOne').value, "X"),
            createPlayer(document.querySelector('#playerTwo').value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        for (let i = 0; i < 9; i++) {
            GameBoard.update(i, "");
        }
        GameBoard.renderBoard();
    }

    function checkForWin(board) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    }

    function checkForTie(board) {
        return board.every(cell => cell !== "");
    }

    return {
        start,
        handleClick
    }
})();

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    Game.start();
});