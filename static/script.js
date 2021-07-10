var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

var cell00 = document.querySelector("#index-01");
var cell01 = document.querySelector("#index-02");
var cell02 = document.querySelector("#index-03");
var cell10 = document.querySelector("#index-10");
var cell11 = document.querySelector("#index-11");
var cell12 = document.querySelector("#index-12");
var cell20 = document.querySelector("#index-20");
var cell21 = document.querySelector("#index-21");
var cell22 = document.querySelector("#index-22");
var xturn = true;
var cells = document.querySelectorAll(".cell");
var isBoardFull = false;
var owin = false;
var xwin = false;
cells.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.style.cursor === "not-allowed") return;
    //alert("clicked");
    board[parseInt(el.id[6])][parseInt(el.id[7])] = xturn ? "X" : "O";
    document.getElementById(`index-${el.id[6]}${el.id[7]}`).style.cursor =
      "not-allowed";
    document.getElementById(`index-${el.id[6]}${el.id[7]}`).innerHTML = xturn
      ? "X"
      : "O";
    console.log(board);
    //console.log(el.id);
    xturn = !xturn;
    document.querySelector(
      `#index-${el.id[6]}${el.id[7]}:hover`
    ).style.background = "white";
    let [x, o] = checkWin(board);
    console.log(x);
    console.log(o);
    isBoardFull = isBoardFullFunc(board);
    if (x === true) {
      sleep(500);
      alert("O just won !");
      window.location.reload(true);
    }
    if (o === true) {
      sleep(500);
      alert("X just won !");
      window.location.reload(true);
    }
    isBoardFullFunc(board);
    if (isBoardFull === true && o == false && x == false) {
      sleep(500);
      alert("That was a tie ! ");
      window.location.reload(true);
    }
  });
});
function checkWin(b) {
  if (b[0][0] == "X" && b[0][1] == "X" && b[0][2] == "X") {
    window.xwin = true;
  } else if (b[0][0] == "O" && b[0][1] == "O" && b[0][2] == "O") {
    window.owin = true;
  } else if (b[1][0] == "X" && b[1][1] == "X" && b[1][2] == "X") {
    window.xwin = true;
  } else if (b[1][0] == "O" && b[1][1] == "O" && b[1][2] == "O") {
    window.owin = true;
  } else if (b[2][0] == "X" && b[2][1] == "X" && b[2][2] == "X") {
    window.xwin = true;
  } else if (b[2][0] == "O" && b[2][1] == "O" && b[2][2] == "O") {
    window.owin = true;
  } else if (b[0][0] == "X" && b[1][0] == "X" && b[2][0] == "X") {
    window.xwin = true;
  } else if (b[0][0] == "O" && b[1][0] == "O" && b[2][0] == "O") {
    window.owin = true;
  } else if (b[0][1] == "X" && b[1][1] == "X" && b[2][1] == "X") {
    window.xwin = true;
  } else if (b[0][1] == "O" && b[1][1] == "O" && b[2][1] == "O") {
    window.owin = true;
  } else if (b[0][2] == "X" && b[1][2] == "X" && b[2][2] == "X") {
    window.xwin = true;
  } else if (b[0][2] == "O" && b[1][2] == "O" && b[2][2] == "O") {
    window.owin = true;
  } else if (b[0][0] == "X" && b[1][1] == "X" && b[2][2] == "X") {
    window.xwin = true;
  } else if (b[1][0] == "O" && b[1][1] == "O" && b[2][2] == "O") {
    window.owin = true;
  } else if (b[0][2] == "X" && b[1][1] == "X" && b[2][0] == "X") {
    window.xwin = true;
  } else if (b[0][2] == "O" && b[1][1] == "O" && b[2][0] == "O") {
    window.owin = true;
  }
  return [owin, xwin];
}
function isBoardFullFunc(b) {
  for (var i of b) {
    for (var j of i) {
      if (j !== "") continue;
      return false;
    }
  }
  return true;
}
function sum(arr) {
  console.log(arr);
  let result = 0;
  for (let i = 0; i <= arr.length; i++) {
    result += i;
  }
  return result;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
