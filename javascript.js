const GameBoard = (function(){
    let board = ["","","","","","","","",""];
    
    const renderBoard = () => {
        const main = document.querySelector('main');
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        board.forEach((symbol, index) => {
            //Creates gameboard square with class and ID for each array element, adds event listener, then appends to main grid
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

    return {
        renderBoard,
        update
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
        GameBoard.update(index, players[currentPlayerIndex].symbol);
    }

    const start = () => {
        players = [
            createPlayer(document.querySelector('#playerOne').value, "X"),
            createPlayer(document.querySelector('#playerTwo').value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        GameBoard.renderBoard();
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