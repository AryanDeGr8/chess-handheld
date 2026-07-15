let board = document.getElementById("board");

board.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});

const chessBoard = new ChessBoard();
chessBoard.renderBoard();

const game = {
  board: chessBoard.board,
  turn: 0,
};

function rotatePieces() {
  if (game.turn) {
    game.board.forEach(function (element) {
      element.forEach(function (element) {
        element.setAttribute("class", "rotate-180");
      });
    });
  } else {
    game.board.forEach(function (element) {
      element.forEach(function (element) {
        element.setAttribute("class", "rotate-0");
      });
    });
  }

  game.turn = game.turn ? 0 : 1;
}
