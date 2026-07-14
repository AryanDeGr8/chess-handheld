let board = document.getElementById("board");

let boardArray = board.childNodes;

board.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});

const game = {
  pieces: document.querySelectorAll("img"),
  turn: 0,
};

function rotatePieces() {
  if (game.turn) {
    game.pieces.forEach(function (element) {
      element.setAttribute("class", "rotate-180");
    });
  } else {
    game.pieces.forEach(function (element) {
      element.setAttribute("class", "rotate-0");
    });
  }

  game.turn = game.turn ? 0 : 1;
}
