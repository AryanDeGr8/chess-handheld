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

  checkIfMoveIsValid: function (x, y) {
    if (this.board[x][y]?.color !== this.selectedPiece.color) {
      if (this.selectedPiece instanceof Knight) {
        if (
          (Math.abs(
            getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[0] -
              x,
          ) === 2 &&
            Math.abs(
              getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[1] -
                y,
            ) === 1) ||
          (Math.abs(
            getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[0] -
              x,
          ) === 1 &&
            Math.abs(
              getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[1] -
                y,
            ) === 2)
        ) {
          return true;
        } else {
          return false;
        }
      }

      if (this.selectedPiece instanceof Rook) {
        if (
          getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[0] === x
        ) {
          if (
            y > getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[1]
          ) {
            for (
              let i =
                getCurrentSquareCoordinates(
                  this.selectedPiece.currentSquare,
                )[1] + 1;
              i++;
              i < y
            ) {
              if (this.board[x][i]) {
                return false;
              }
            }
            return true;
          } else {
            for (
              let i = y + 1;
              i++;
              i <
              getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[1]
            ) {
              if (this.board[x][i] !== null) {
                return false;
              }
            }
            return true;
          }
        } else if (
          getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[1] === y
        ) {
          if (
            x > getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[0]
          ) {
            for (
              let i =
                getCurrentSquareCoordinates(
                  this.selectedPiece.currentSquare,
                )[0] + 1;
              i++;
              i < x
            ) {
              if (this.board[i][y] !== null) {
                return false;
              }
            }

            return true;
          } else {
            for (
              let i = x + 1;
              i++;
              i <
              getCurrentSquareCoordinates(this.selectedPiece.currentSquare)[0]
            ) {
              if (this.board[i][y] !== null) {
                return false;
              }
            }

            return true;
          }
        } else {
          return false;
        }
      }

      if (this.selectedPiece instanceof Bishop) {
        return true;
      }

      if (this.selectedPiece instanceof Queen) {
        return true;
      }

      if (this.selectedPiece instanceof King) {
        return true;
      }

      if (this.selectedPiece instanceof Pawn) {
        return true;
      }
    }
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
  if (game.selectedPiece) {
    if (game.checkIfMoveIsValid(x, y)) {
      game.makeMove(x, y);
    } else {
      game.selectedPiece = null;
    }
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

function getCurrentSquareCoordinates(currentSquare) {
  let x = Math.floor(currentSquare / 8);
  let y = currentSquare % 8;

  return [x, y];
}
