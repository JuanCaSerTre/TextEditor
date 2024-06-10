let container = document.querySelector(".container");
let gridButton = document.getElementById(".submit-grid");
let clreaGridButton = document.getElementById(".clear-grid");
let gridWidth = document.getElementById(".width-range");
let gridHeight = document.getElementById(".height-range");
let colorButton = document.getElementById(".color-input");
let eraseButton = document.getElementById(".erase-btn");
let widthValue = document.getElementById(".width-value");
let paintButton = document.getElementById(".paint-btn");
let heightValue = document.getElementById(".height-value");

let events = {
  mouse: { down: "mousedown", move: "mousemove", up: "mouseup" },

  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};
