const GameBoard = (function(){
    let board = ["","","","","","","","",""];
    
    const renderBoard = () => {
        board.forEach((symbol, index) => {
            const main = document.querySelector('main');
            let boardSquare = document.createElement('div');
            boardSquare.classList.add('boardSquare');
            boardSquare.setAttribute('id', `square-${index}`);
            boardSquare.textContent = `${symbol}`;
            main.appendChild(boardSquare);
        });
    }

    return {
        renderBoard
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
        start
    }
})();

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    Game.start();
});