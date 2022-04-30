let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    highlightColor(elementColor, Number(i) + 1);
  }
}

const highlightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  }, time);
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }
  }

  if (clickedOrder.length == order.length) {
    alert(`You got it!\nYour score is: ${score}\nGoing to the next level now!`);
    nextLevel();
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },250);
}

const createColorElement = (color) => {
  if (color === 0) {
    return green;
  } else if (color === 1) {
    return red;
  } else if (color === 2) {
    return yellow;
  } else if (color === 3) {
    return blue;
  }
}

const gameOver = () => {
  alert(`Your score is ${score}\nYou lost! Click "OK" to start a new game.`);
  order = [];
  clickedOrder = [];

  startGame();
}

const nextLevel = () => {
  score++;
  shuffleOrder();
}

const startGame = () => {
  score = 0;
  alert(`Welcome to Genius! Starting new game...`);
  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click();


startGame();