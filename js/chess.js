let board = document.getElementById("board");

let boardArray = board.childNodes;

board.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});

let pieces = document.querySelectorAll("img");
let turn = 0;

function rotatePieces() {
  if (turn) {
    pieces.forEach(function (element) {
      element.setAttribute("class", "rotate-180");
    });
  } else {
    pieces.forEach(function (element) {
      element.setAttribute("class", "rotate-0");
    });
  }

  turn = turn ? 0 : 1;
}
