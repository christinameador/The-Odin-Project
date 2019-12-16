let largeContainer,
  squareBoxes,
  boxNo = 16;
largeContainer = document.querySelector(".container");
let newGridButton = document.querySelector("#new");
newGridButton.addEventListener("click", numOfSquares);

let clearGridButton = document.querySelector("#clear");
clearGridButton.addEventListener("click", clearSquares);

let eraseColorButton = document.querySelector("#erase");
eraseColorButton.addEventListener("click", eraser);

let blackSplashButton = document.querySelector("#black");
blackSplashButton.addEventListener("click", blackSplash);

let colorSplashButton = document.querySelector("#color");
colorSplashButton.addEventListener("click", colorSplash);

function clearSquares() {
  let originalSquares = document.querySelectorAll(".cell");
  originalSquares.forEach(squares => {
    squares.remove();
  });
}

function eraseColors() {
  let originalSquares = document.querySelectorAll(".cell");
  originalSquares.forEach(squares => {
    squares.style.backgroundColor = "white";
  });
}

function numOfSquares() {
  let input = prompt("How many squares do you want in a row.(0 - 50)");
  if (input == null) {
    alert("You cancelled.");
  } else {
    if (input.length <= 0 || isNaN(input) || input > 50) {
      alert("Please input a number from 0 - 50.");
      numOfSquares(input);
    } else {
      let originalSquares = document.querySelectorAll(".cell");
      originalSquares.forEach(squares => {
        squares.remove();
      });
      input = parseInt(input);
      createSquares(input);
    }
  }
}

function createSquares(num) {
  let newNum = num * num;
  largeContainer.setAttribute(
    "style",
    "grid-template:repeat(" + num + ", 1fr) / repeat(" + num + ", 1fr)"
  );

  for (let i = 0; i < newNum; i++) {
    squareBoxes = document.createElement("div");
    squareBoxes.classList.toggle("cell");
    squareBoxes.setAttribute(
      "style",
      "border:1px solid grey; box-sizing:border-box;"
    );
    squareBoxes.addEventListener("mouseover", paintBrush);
    largeContainer.appendChild(squareBoxes);
  }
}
window.addEventListener("load", createSquares(boxNo));

let condition = "colorsplashes";
function paintBrush(e) {
  e.target.style.backgroundColor = getColor();
  if (condition === "black") e.target.style.backgroundColor = "black";
  if (condition === "erase") e.target.style.backgroundColor = "white";
}
function blackSplash() {
  condition = "black";
}
function eraser() {
  condition = "erase";
}
function colorSplash() {
  condition = "colorsplashes";
}

function getColor() {
  let randomNum;
  function randNum() {
    randomNum = (Math.random() * 256).toFixed();
    return randomNum;
  }

  function opacityNum() {
    let random = Math.random().toPrecision(1);
    if (random <= 0.5) return (random = 0.7);
    else {
      return random;
    }
  }

  let colorPicker =
    "rgba(" +
    randNum() +
    ", " +
    randNum() +
    ", " +
    randNum() +
    ", " +
    opacityNum() +
    ")";

  return colorPicker;
}