let board = document.getElementById("board");

let boardArray = board.childNodes;

board.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});
