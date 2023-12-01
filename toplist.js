export { userScoreTop };

// Toplist page
import { gameScreen, gameOverScreen, winnerScreen } from "./bionic.js";
export { createNewHighScore };
export { topListScreen };
export { highScoreListan };
const topListScreen = document.querySelector(".top-list-container");
const topButton = document.querySelector("#menu-item-high");
const topImage = document.querySelector(".top-hangman");
const orderedListTop = document.querySelector(".ordered-top-list");

let userScoreTop = {
  username: "",
  wrong: 0,
  length: 0,
  status: null,
  date: "",
};
let existingHighScoreList =
  JSON.parse(localStorage.getItem("highScoreList")) || [];

topButton.addEventListener("click", () => {
  gameScreen.classList.remove("show-game");
  gameOverScreen.style.display = "none";
  topListScreen.style.display = "block";
  console.log("Button works");
  winnerScreen.style.display = "none";
  createNewHighScore();
});
function highScoreListan() {
  const username = userScoreTop.username;
  const newHighScore = {
    name: username,
    wrong: userScoreTop.wrong,
    length: userScoreTop.length,
    status: userScoreTop.status,
    date: userScoreTop.date,
  };
  existingHighScoreList.push(newHighScore);
  existingHighScoreList.sort((a, b) => a.wrong - b.wrong);

  // Update local storage with the modified list
  localStorage.setItem("highScoreList", JSON.stringify(existingHighScoreList));
}

function createNewHighScore() {
  orderedListTop.innerText = "";
  const topScoreList = existingHighScoreList.map((highScore) => {
    const li = document.createElement("li");
    const nameUser = document.createElement("span");
    const wrongUser = document.createElement("span");
    const wordUser = document.createElement("span");
    const statusUser = document.createElement("span");
    const dateUser = document.createElement("span");
    nameUser.innerText = highScore.name;
    wrongUser.innerText = highScore.wrong;
    wordUser.innerText = highScore.length;
    if (highScore.status) {
      const img = document.createElement("img");
      img.src = "img/yes.png";
      img.alt = "Vinst";
      statusUser.innerHTML = ""; // Clear any existing content
      statusUser.appendChild(img);
    } else {
      const img = document.createElement("img");
      img.src = "img/delete.png";
      img.alt = "Förlust";
      statusUser.innerHTML = ""; // Clear any existing content
      statusUser.appendChild(img);
    }
    dateUser.innerText = highScore.date;
    nameUser.classList.add("width");
    wordUser.classList.add("width");
    wrongUser.classList.add("width");
    statusUser.classList.add("width");
    dateUser.classList.add("width");
    li.append(nameUser);
    li.append(statusUser);
    li.append(wordUser);
    li.append(wrongUser);
    li.append(dateUser);
    return li;
  });

  topScoreList.forEach((top) => {
    orderedListTop.append(top);
  });
}
