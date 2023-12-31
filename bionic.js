import { topListScreen, userScoreTop, highScoreList } from "./toplist.js";
import { words } from "./svenska-ord.js";
import { goBack } from "./toplist.js";
export { winnerScreen };
export { gameOverScreen };
export { gameScreen };
export { wordExistsInGame };
export { gameStatus };
export { correctGuesses };
export { count };

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
    wordExistsInGame(e.target, String.fromCharCode(charCode));
  });
  keyButtons.push({ button, char: String.fromCharCode(charCode) });
}
// Firstpage
const playBtn = document.querySelector(".play-btn");
const startScreen = document.querySelector("#start-display");
const selectScreen = document.querySelector("#selection");
const gameScreen = document.querySelector("#game-screen");
const easyWordList = [];
const hardWordList = [];

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
  for (let i = 0; i < slumpatOrd.length; i++) {
    paragraph = document.createElement("p");
    paragraph.textContent = slumpatOrd[i];
    container.appendChild(paragraph);
    paragraph.classList.add("hide-word");
    menuFooter.style.display = "flex";
  }
}
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
  let user = userName.value.trim();

  if (user === "") {
    alert("Ange ett giltigt användarnamn!");
    return;
  }
  let data = {
    user: user,
  };
  userScoreTop.username = user;
  playerName.innerText = userName.value;
  let json = JSON.stringify(data);

  localStorage.setItem(inputName, json);
  slumpatOrd = slumpmassigtOrd();
  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  playerScore.innerText = totalGuesses;
  RandomWord();
  console.log(slumpatOrd);
});

hardBtn.addEventListener("click", () => {
  let user = userName.value.trim();

  if (user === "") {
    alert("Ange ett giltigt användarnamn!");
    return;
  }

  let data = {
    user: user,
  };
  userScoreTop.username = user;
  playerName.innerText = userName.value;
  let json = JSON.stringify(data);

  localStorage.setItem(inputName, json);
  slumpatOrd = slumpaHardOrd();
  selectScreen.classList.remove("show");
  gameScreen.classList.add("show-game");
  playerScore.innerText = totalGuesses;
  RandomWord();
  console.log(slumpatOrd);
});

for (let i = 0; i < words.length; i++) {
  const currentWord = words[i];
  if (currentWord.length >= 10 && currentWord.length <= 13) {
    easyWordList.push(currentWord);
  } else if (currentWord.length < 10) {
    hardWordList.push(currentWord);
  }
}

function slumpmassigtOrd() {
  const index = Math.floor(Math.random() * easyWordList.length);
  return easyWordList[index].toUpperCase();
}

function slumpaHardOrd() {
  const mix = Math.floor(Math.random() * hardWordList.length);
  return hardWordList[mix].toUpperCase();
}

let container = document.querySelector("#the-word");
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
        wordExistsInGame(button.button, pressedChar);
      }
    }
  }
});

let count = 0;
const hangbotImg = document.querySelector(".hangman");
const countDisplay = document.querySelector(".count");
const playerScore = document.querySelector("#user-points");
const winnerScore = document.querySelector("#user-points-winner");
const gameOverScreen = document.querySelector(".game-over-screen");
const gameOverWord = document.querySelector("#game-over-word");
const winnerScreen = document.querySelector(".winner-screen");
const winnerWord = document.querySelector("#winner-word");
let correctGuesses = 0;
let gameStatus = false;
const wordExistsInGame = (button, clickedLetter) => {
  let scoreTime = new Date();

  let day = scoreTime.getDate();
  let month = scoreTime.getMonth() + 1;
  let year = scoreTime.getFullYear();

  let formattedTime = scoreTime.toLocaleTimeString("sv-SE", { hour12: false });
  let [hours, minutes] = formattedTime.split(":");

  let formattedDate = `${day}/${month}/${year}`;
  let fullFormattedDateTime = `${formattedDate} ${hours}:${minutes}`;
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
    gameOverScreen.style.display = "flex";
    gameOverWord.innerText = slumpatOrd;
    playerScore.innerText = totalGuesses;
    userScoreTop.length = wordArray.length;
    userScoreTop.status = gameStatus = false;
    userScoreTop.date = fullFormattedDateTime;
    goBack.style.visibility = "hidden";
    highScoreList();
  }
  if (correctGuesses === wordArray.length) {
    winnerScore.innerText = totalGuesses;
    userScoreTop.wrong = count;
    winnerScreen.style.display = "flex";
    gameScreen.classList.remove("show-game");
    winnerWord.innerText = slumpatOrd;
    userScoreTop.length = wordArray.length;
    userScoreTop.status = gameStatus = true;
    userScoreTop.date = fullFormattedDateTime;
    goBack.style.visibility = "hidden";
    highScoreList();
  }
};

// Button
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
  goBack.style.visibility = "visible";
  countDisplay.textContent = count;
  hangbotImg.src = "img/the-hangbot-0.png";

  keyButtons.forEach((item) => {
    item.button.disabled = false;
    item.button.classList.remove(
      "key-disable",
      "key-disable-right",
      "key-disable-wrong"
    );
  });
  container.innerHTML = "";
  selectScreen.classList.remove("show");
  gameScreen.classList.remove("show-game");
  menuFooter.style.display = "none";
  topListScreen.style.display = "none";
}