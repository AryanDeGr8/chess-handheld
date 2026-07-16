class ChessBoard {
  constructor(
    board = [
      [
        new Rook("black"),
        new Knight("black"),
        new Bishop("black"),
        new Queen("black"),
        new King("black"),
        new Bishop("black"),
        new Knight("black"),
        new Rook("black"),
      ],
      [
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
        new Pawn("black"),
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
        new Pawn("white"),
      ],
      [
        new Rook("white"),
        new Knight("white"),
        new Bishop("white"),
        new Queen("white"),
        new King("white"),
        new Bishop("white"),
        new Knight("white"),
        new Rook("white"),
      ],
    ],
  ) {
    this.board = board;
  }

  renderBoard() {
    let boardElement = document.getElementById("board");

    boardElement.innerHTML = "";

    let color = "white";
    let i = 0;

    this.board.forEach(function (element) {
      element.forEach(function (element) {
        let div = document.createElement("div");

        if (color === "white") {
          div.setAttribute(
            "class",
            "bg-white h-(--side-length) w-(--side-length) flex items-center justify-center boardSquare",
          );
          if (i % 8 !== 7) {
            color = "olive";
          }
        } else if (color === "olive") {
          div.setAttribute(
            "class",
            "bg-olive-500 h-(--side-length) w-(--side-length) flex items-center justify-center boardSquare",
          );

          if (i % 8 !== 7) {
            color = "white";
          }
        }

        if (element !== null) {
          let image = element.image;
          let imageElement = document.createElement("img");

          imageElement.setAttribute("src", image);

          div.appendChild(imageElement);
        }

        boardElement.appendChild(div);

        i++;
      });
    });
  }
}
