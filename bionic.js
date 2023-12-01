import { topListScreen, userScoreTop } from "./toplist.js";
import { words } from "./svenska-ord.js";
import { createNewHighScore } from "./toplist.js";
export { winnerScreen };
export { gameOverScreen };
export { gameScreen };
export { FinnsInGame };
export { gameStatus };
// keybord
const keybordDiv = document.querySelector("#keyboard");
keyboard;
const keyButtons = [];
const initGame = (button, keyButtons) => {};

for (let charCode of [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 197, 196, 214,
]) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(charCode);
  keybordDiv.appendChild(button);
  button.classList.add("key");
  button.addEventListener("click", (e) => {
    button.classList.add("key-disable");
    button.disabled = true;
    totalGuesses++;
    initGame(e.target, String.fromCharCode(charCode));
    FinnsInGame(e.target, String.fromCharCode(charCode));
  });
  keyButtons.push({ button, char: String.fromCharCode(charCode) });
}
// Firstpage
const playBtn = document.querySelector(".play-btn");
const startScreen = document.querySelector("#start-display");
const selectScreen = document.querySelector("#selection");
const gameScreen = document.querySelector("#game-screen");
const lattaOrd = [];
const svåraOrd = [];

playBtn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  selectScreen.classList.add("show");
});
// Selection page
let slumpatOrd;
const menuFooter = document.querySelector(".menu");
const easyBtn = document.querySelector("#try-btn");
const hardBtn = document.querySelector("#hard-btn");
let paragraph;

function RandomWord() {
  for (var i = 0; i < slumpatOrd.length; i++) {
    paragraph = document.createElement("p");
    paragraph.textContent = slumpatOrd[i];
    container.appendChild(paragraph);
    paragraph.classList.add("hide-word");
    menuFooter.style.display = "flex";
  }
}
hardBtn.addEventListener("click", () => {
  slumpatOrd = slumpaHardOrd();
  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  playerScore.innerText = totalGuesses;
  RandomWord();
  console.log(slumpatOrd);
});

easyBtn.addEventListener("click", () => {
  slumpatOrd = slumpmassigtOrd();
  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  playerScore.innerText = totalGuesses;
  RandomWord();
  console.log(slumpatOrd);
});

const userName = document.querySelector("#user-input");
const inputName = "Username";
const playerName = document.querySelector("#user-name");

let json = localStorage.getItem(inputName);

try {
  let object = JSON.parse(json);
  userName.value = object.user;
} catch {
  console.log("Nåt gick fel. Försök spara igen.");
}

easyBtn.addEventListener("click", () => {
  let user = userName.value;
  let data = {
    user: user,
  };
  userScoreTop.username = user;
  playerName.innerText = userName.value;
  let json = JSON.stringify(data);

  localStorage.setItem(inputName, json);
});

hardBtn.addEventListener("click", () => {
  let user = userName.value;
  let data = {
    user: user,
  };
  userScoreTop.username = user;
  playerName.innerText = userName.value;
  let json = JSON.stringify(data);

  localStorage.setItem(inputName, json);
});

for (let i = 0; i < words.length; i++) {
  const currentWord = words[i];
  if (currentWord.length >= 10 && currentWord.length <= 13) {
    lattaOrd.push(currentWord);
  } else if (currentWord.length < 10) {
    svåraOrd.push(currentWord);
  }
}
// console.log(lattaOrd);

function slumpmassigtOrd() {
  const index = Math.floor(Math.random() * lattaOrd.length);
  return lattaOrd[index].toUpperCase();
}

function slumpaHardOrd() {
  const mix = Math.floor(Math.random() * svåraOrd.length);
  return svåraOrd[mix].toUpperCase();
}
// const slumpaHard = slumpaHardOrd();

// const slumpatOrd = slumpmassigtOrd();

// Get the container element where you want to display the letters
var container = document.querySelector("#the-word");
let totalGuesses = 0;
document.addEventListener("keydown", (event) => {
  if (gameScreen.classList.contains("show-game")) {
    const pressedChar = event.key.toUpperCase();

    const isLetter = pressedChar >= "A" && pressedChar <= "Ö";

    if (isLetter) {
      const button = keyButtons.find((item) => item.char === pressedChar);
      if (button && !button.button.disabled) {
        totalGuesses++;
        button.button.disabled = true;
        button.button.classList.add("key-disable");
        initGame(button.button, pressedChar);
        FinnsInGame(button.button, pressedChar);
      }
    }
  }
});

var count = 0;
const hangbotImg = document.querySelector(".hangman");
const countDisplay = document.querySelector(".count");
const playerScore = document.querySelector("#user-points");
const gameOverScreen = document.querySelector(".game-over-screen");
const gameOverWord = document.querySelector("#game-over-word");
const winnerScreen = document.querySelector(".winner-screen");
const winnerWord = document.querySelector("#winner-word");
let correctGuesses = 0;
let gameStatus = false;
let scoreTime = new Date();
// let currentDate = new Date();

// Get the individual components: day, month, and year
let day = scoreTime.getDate();
let month = scoreTime.getMonth() + 1; // Months are zero-based, so add 1
let year = scoreTime.getFullYear();

let formattedTime = scoreTime.toLocaleTimeString('sv-SE', { hour12: false });
let [hours, minutes] = formattedTime.split(':');

let formattedDate = `${day}/${month}/${year}`;
let fullFormattedDateTime = `${formattedDate} ${hours}:${minutes}`;

const FinnsInGame = (button, clickedLetter) => {
  let foundInWord = false;

  let paragraph = document.querySelector("#the-word");

  let wordArray = Array.from(slumpatOrd.toUpperCase());
  wordArray.forEach((letter, index) => {
    if (letter === clickedLetter) {
      console.log(clickedLetter);
      console.log(totalGuesses);

      let letterSpan = paragraph.children[index];
      if (letterSpan) {
        letterSpan.classList.add("show-word");
        button.classList.add("key-disable-right");

        correctGuesses++;
      }
      foundInWord = true;
    }
  });
  if (!foundInWord) {
    count++;
    countDisplay.textContent = count;
    userScoreTop.wrong = count;

    console.log("finns inte", userScoreTop);
    hangbotImg.src = `img/the-hangbot-${count}.png`;
    button.classList.add("key-disable-wrong");
  }
  if (count == 6) {
    console.log("game over");
    gameScreen.classList.remove("show-game");
    gameOverScreen.style.display = "block";
    gameOverWord.innerText = slumpatOrd;
    playerScore.innerText = totalGuesses;
    userScoreTop.length = wordArray.length;
    userScoreTop.status = gameStatus = false;
    userScoreTop.date = fullFormattedDateTime;
    createNewHighScore();
  }
  if (correctGuesses === wordArray.length) {
    playerScore.innerText = totalGuesses;
    userScoreTop.wrong = count;
    winnerScreen.style.display = "block";
    gameScreen.classList.remove("show-game");
    winnerWord.innerText = slumpatOrd;
    userScoreTop.length = wordArray.length;
    userScoreTop.status = gameStatus = true;
    userScoreTop.date = fullFormattedDateTime;
    createNewHighScore();
  }
};

// Button
// const restartGame = document.querySelector("#menu-item-restart");
const restartGame = document.querySelector("#menu-item-restart");
const rulesGame = document.querySelector("#menu-item-rules");
const quitGame = document.querySelector("#menu-item-quit");

restartGame.addEventListener("click", () => {
  quitResetGame();
  selectScreen.classList.add("show");
});

quitGame.addEventListener("click", () => {
  quitResetGame();
  startScreen.classList.remove("hide");
});

function quitResetGame() {
  gameOverScreen.style.display = "none";
  winnerScreen.style.display = "none";
  count = 0;
  totalGuesses = 0;
  correctGuesses = 0;

  // Reset hangbot image
  hangbotImg.src = "img/the-hangbot-0.png";

  // Enable all keyboard buttons and remove classes
  keyButtons.forEach((item) => {
    item.button.disabled = false;
    item.button.classList.remove(
      "key-disable",
      "key-disable-right",
      "key-disable-wrong"
    );
  });
  container.innerHTML = "";
  //   startScreen.classList.remove("hide");
  selectScreen.classList.remove("show");
  gameScreen.classList.remove("show-game");
  menuFooter.style.display = "none";
  topListScreen.style.display = "none";
}
