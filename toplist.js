export { userScoreTop };

// Toplist page
import { gameScreen, gameOverScreen, winnerScreen } from "./bionic.js";
import { correctGuesses, count, wordExistsInGame } from "./bionic.js";
export { createNewHighScore };
export { topListScreen };
export { highScoreList };
export { goBack };
const topListScreen = document.querySelector(".top-list-container");
const topButton = document.querySelector("#menu-item-high");
const topImage = document.querySelector(".top-hangman");
const orderedListTop = document.querySelector(".ordered-top-list");
const goBack = document.querySelector("#tillbaka-btn");
// const sortByDate = document.querySelector(".date-sort");

goBack.addEventListener("click", () => {
  gameScreen.classList.add("show-game");
  topListScreen.style.display = "none";
});

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
function highScoreList(list) {
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
      img.src = "img/symbol-win_1.png";
      img.alt = "Vinst";
      statusUser.innerHTML = ""; 
      statusUser.appendChild(img);
    } else {
      const img = document.createElement("img");
      img.src = "img/symbol-loose_1.png";
      img.alt = "Förlust";
      statusUser.innerHTML = ""; 
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
const sortByDate = document.querySelectorAll(".date-sort");
function compareByDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return 0;
  }
}
sortByDate.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("click");
    existingHighScoreList.sort(compareByDate);
    createNewHighScore();
  });
});

const sortByWrong = document.querySelectorAll('.wrong-sort-btn')

function compareByWrong(a, b) {

  if (a.wrong < b.wrong) {
    return -1;
  } else if (a.wrong > b.wrong) {
    return 1;
  } else {
    return 0;
  }
}
sortByWrong.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("click 2");
    existingHighScoreList.sort(compareByWrong);
    createNewHighScore();
  });
});
