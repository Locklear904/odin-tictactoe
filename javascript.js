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
            //boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });
    }

    return {
        renderBoard
    }
})();

/*(function(){
    let displayController = {
        displayUpdate() {
            board.forEach(element => {
                
            });
        }
    }
    return {
        displayUpdate
    }
})();

const playerFactory = () => {

}*/

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    //Game.start;
});