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

class Rook extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/rook-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/rook-b.svg";
    }
  }
}

class Knight extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/knight-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/knight-b.svg";
    }
  }
}

class Bishop extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/bishop-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/bishop-b.svg";
    }
  }
}

class Queen extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/queen-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/queen-b.svg";
    }
  }
}

class King extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/king-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/king-b.svg";
    }
  }
}

class Pawn extends ChessPiece {
  constructor(color, currentSquare, moveList = [], turnsMoved = 0) {
    super(color, currentSquare, moveList, turnsMoved);

    if (color === "white") {
      this.image = "img/pieces/pawn-w.svg";
    } else if (color === "black") {
      this.image = "img/pieces/pawn-b.svg";
    }
  }
}
