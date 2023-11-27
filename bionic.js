// keybord
const keybordDiv = document.querySelector("#keyboard");
keyboard;
const keyButtons = [];
const initGame = (button, keyButtons) => {
  //   console.log(clickedLetter);
};

for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keybordDiv.appendChild(button);
  button.classList.add("key");
  button.addEventListener("click", (e) => {
    button.classList.add("key-disable");
    button.disabled = true;
    initGame(e.target, String.fromCharCode(i));
    FinnsInGame(e.target, String.fromCharCode(i));
  });
  keyButtons.push({ button, char: String.fromCharCode(i) });
}

for (let charCode of [197, 196, 214]) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(charCode);
  keybordDiv.appendChild(button);
  button.classList.add("key");
  button.addEventListener("click", (e) => {
    button.classList.add("key-disable");
    button.disabled = true;
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
const easyBtn = document.querySelector("#try-btn");
const hardBtn = document.querySelector("#hard-btn");
let paragraph;

hardBtn.addEventListener("click", () => {
  console.log(slumpaHard);

  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  for (var i = 0; i < slumpaHard.length; i++) {
    paragraph = document.createElement("p");
    paragraph.textContent = slumpaHard[i];
    container.appendChild(paragraph);
    paragraph.classList.add("hide-word");
  }
});

easyBtn.addEventListener("click", () => {
  console.log(slumpatOrd);

  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  for (var i = 0; i < slumpatOrd.length; i++) {
    paragraph = document.createElement("p");
    paragraph.textContent = slumpatOrd[i];
    container.appendChild(paragraph);
    paragraph.classList.add("hide-word");
  }
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
  playerName.innerText = userName.value;
  let json = JSON.stringify(data);

  localStorage.setItem(inputName, json);
});

import { words } from "./svenska-ord.js";

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

const slumpaHard = slumpaHardOrd();

const slumpatOrd = slumpmassigtOrd();

// Get the container element where you want to display the letters
var container = document.querySelector("#the-word");

// Loop through each letter in the word
// for (var i = 0; i < slumpatOrd.length; i++) {
// 	var paragraph = document.createElement("p");
// 	paragraph.textContent = slumpatOrd[i];
// 	container.appendChild(paragraph);
// 	paragraph.classList.add("hide-word");
// }

// String.fromCharCode(charCode);

document.addEventListener("keydown", (event) => {
  if (gameScreen.classList.contains("show-game")) {
    const pressedChar = event.key.toUpperCase();

    const isLetter = pressedChar >= "A" && pressedChar <= "Ö";

    if (isLetter) {
      const button = keyButtons.find((item) => item.char === pressedChar);
      if (button && !button.button.disabled) {
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
const gameOverScreen = document.querySelector(".game-over-screen")
let lattScore = 600;
playerScore.innerText = lattScore;
const FinnsInGame = (button, clickedLetter) => {
  let foundInWord = false;

  let paragraph = document.querySelector("#the-word");

  let wordArray = Array.from(slumpatOrd.toUpperCase());
  let newLattScore
  wordArray.forEach((letter, index) => {
    if (letter === clickedLetter) {
      console.log(clickedLetter);

      let letterSpan = paragraph.children[index];
      if (letterSpan) {
        letterSpan.classList.add("show-word");
      }

      foundInWord = true;
    }
  });

  if (!foundInWord) {
    newLattScore = (lattScore -= 100);
    playerScore.innerText = newLattScore;
    console.log("finns inte");
    count++;
    countDisplay.textContent = count;
    hangbotImg.src = `img/the-hangbot-${count}.png`;
  }
  if (count == 6) {
    console.log('game over');
    gameScreen.classList.remove('show-game')
    gameOverScreen.style.display = 'block';

    


  }
};

// let userScore = localStorage.getItem('user-points')
//   if (!foundInWord) {
//   }
// try {
//   let object = JSON.parse()
//   userScore = object.score
// }
// catch (error) {
//   console.log("Error parsing JSON:", error)
// }
