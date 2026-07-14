class ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    this.color = color;
    this.moveList = moveList;
    this.currentSquare = currentSquare;
    this.turnsMoved = turnsMoved;
  }

  makeMove() {}

  checkIfMoveIsValid() {}
}

class Rook extends ChessPiece {}

class Knight extends ChessPiece {}

class Bishop extends ChessPiece {}

class Queen extends ChessPiece {}

class King extends ChessPiece {}

class Pawn extends ChessPiece {}
