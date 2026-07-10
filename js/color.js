let boardSquaresArray = document.querySelectorAll(".boardSquare");

function colorChessBoard() {
  let color = "white";
  for (let i = 0; i < boardSquaresArray.length; i++) {
    if (color === "white") {
      boardSquaresArray[i].setAttribute(
        "class",
        "bg-white h-full w-full flex items-center justify-center boardSquare",
      );
      if (i % 8 !== 7) {
        color = "olive";
      }
    } else if (color === "olive") {
      boardSquaresArray[i].setAttribute(
        "class",
        "bg-olive-500 h-full w-full flex items-center justify-center boardSquare",
      );

      if (i % 8 !== 7) {
        color = "white";
      }
    }
  }
}

console.log("Hello World");

colorChessBoard();
