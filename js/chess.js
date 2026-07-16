let board = document.getElementById("board");

// board.addEventListener("click", function (event) {
//   console.log(event.target.parentNode);
// });

const chessBoard = new ChessBoard();
// chessBoard.renderBoard();

const game = {
  board: chessBoard.board,
  turn: 0,
  selectedPiece: null,

  setPieces: function () {
    i = 0;
    this.board.forEach(function (element) {
      element.forEach(function (element) {
        if (element) {
          element.currentSquare = i;
        }
        i++;
      });
    });

    chessBoard.renderBoard();
    addListenersToGame();
  },

  makeMove: function (x, y) {
    let currentSquare = this.selectedPiece.currentSquare;
    this.selectedPiece.currentSquare = 8 * x + y;

    // for the internal 2d array
    this.board[Math.floor(currentSquare / 8)][currentSquare % 8] = null;
    this.board[x][y] = this.selectedPiece;

    this.selectedPiece = null;

    // for the visual board

    let pieceImg = board.children[currentSquare].children[0];
    board.children[8 * x + y].innerHTML = "";
    board.children[8 * x + y].appendChild(pieceImg);
    board.children[currentSquare].innerHTML = "";

    this.turn = this.turn ? 0 : 1;
  },
};

game.setPieces();

// turnwise piece rotating logic
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

function selectPiece(game, x, y) {
  console.log(game.board[x][y]);

  if (game.board[x][y] !== null) {
    if (game.turn === 0 && game.board[x][y].color === "white") {
      game.selectedPiece = game.board[x][y];
    } else if (game.turn === 1 && game.board[x][y].color === "black") {
      game.selectedPiece = game.board[x][y];
    }
  }
}

function selectOrMove(game, x, y) {
  if (game.selectedPiece && game.selectedPiece.currentSquare !== 8 * x + y) {
    // if (selectedPiece.checkIfMoveIsValid(x, y)) {
    game.makeMove(x, y);
    // }
    // game.turn = game.turn ? 0 : 1;
  } else {
    selectPiece(game, x, y);
  }
}

function addListenersToGame() {
  let boardSquares = board.children;

  for (let i = 0; i < boardSquares.length; i++) {
    boardSquares[i].addEventListener("click", function () {
      let x = Math.floor(i / 8);
      let y = i % 8;

      console.log([x, y]);
      selectOrMove(game, x, y);
    });
  }
}
