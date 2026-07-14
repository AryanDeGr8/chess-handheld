class ChessBoard {
  constructor(
    board = [
      [
        new Rook("black", 0),
        new Knight("black", 1),
        new Bishop("black", 2),
        new Queen("black", 3),
        new King("black", 4),
        new Bishop("black", 5),
        new Knight("black", 6),
        new Rook("black", 7),
      ],
      [
        new Pawn("black", 8),
        new Pawn("black", 9),
        new Pawn("black", 10),
        new Pawn("black", 11),
        new Pawn("black", 12),
        new Pawn("black", 13),
        new Pawn("black", 14),
        new Pawn("black", 15),
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn("white", 48),
        new Pawn("white", 49),
        new Pawn("white", 50),
        new Pawn("white", 51),
        new Pawn("white", 52),
        new Pawn("white", 53),
        new Pawn("white", 54),
        new Pawn("white", 55),
      ],
      [
        new Rook("white", 56),
        new Knight("white", 57),
        new Bishop("white", 58),
        new Queen("white", 59),
        new King("white", 60),
        new Bishop("white", 61),
        new Knight("white", 62),
        new Rook("white", 63),
      ],
    ],
  ) {
    this.board = board;
  }

  renderBoard(){
    
  }
}
