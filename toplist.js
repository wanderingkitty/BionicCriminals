export { userScoreTop };

// Toplist page
import { gameScreen } from "./bionic.js";
import { gameOverScreen } from "./bionic.js";
import { winnerScreen } from "./bionic.js";
import { FinnsInGame } from "./bionic.js";
import { gameStatus } from "./bionic.js";
const topListScreen = document.querySelector(".top-list-container");
const topButton = document.querySelector("#menu-item-high");
const topImage = document.querySelector(".top-hangman");
const orderedListTop = document.querySelector(".ordered-top-list");

let userScoreTop = {
  username: "",
  wrong: 0,
  length: 0,
  status: "",
  date: "",
};

topButton.addEventListener("click", () => {
  gameScreen.classList.remove("show-game");
  gameOverScreen.style.display = "none";
  topListScreen.style.display = "block";
  console.log("Button works");
  createNewHighScore();
  winnerScreen.style.display = "none";
});

function createNewHighScore() {
  const username = userScoreTop.username;
  const newHighScore = {
    name: username,
    wrong: userScoreTop.wrong,
    length: userScoreTop.length,
    staus: userScoreTop.status,
  };

  let existingHighScoreList =
    JSON.parse(localStorage.getItem("highScoreList")) || [];
  existingHighScoreList.push(newHighScore);
  existingHighScoreList.sort((a, b) => b.wrong - a.wrong);

  // Update local storage with the modified list
  localStorage.setItem("highScoreList", JSON.stringify(existingHighScoreList));

  orderedListTop.innerText = "";
  const topScoreList = existingHighScoreList.map((highScore) => {
    const li = document.createElement("li");
    const nameUser = document.createElement("span");
    const wrongUser = document.createElement("span");
    const wordUser = document.createElement("span");
    const statusUser = document.createElement("span");
    nameUser.innerText = highScore.name;
    wrongUser.innerText = highScore.wrong;
    wordUser.innerText = highScore.length;
    if (gameStatus) {
      statusUser.style.backgroundColor = "#35ff69";
    } else {
      statusUser.style.backgroundColor = "#c33149";
    }
    nameUser.classList.add("width");
    wordUser.classList.add("width");
    wrongUser.classList.add("width");
    statusUser.classList.add("width");
    li.append(nameUser);
    li.append(wordUser);
    li.append(wrongUser);
    li.append(statusUser);
    return li;
  });

  topScoreList.forEach((top) => {
    orderedListTop.append(top);
  });
}
