let userScoreTop = {
	username: '',
	points: 0
};

<<<<<<< HEAD
console.log(userScoreTop);

export { userScoreTop }
=======
export { userScoreTop };
>>>>>>> Alina

// Toplist page
import { gameScreen } from "./bionic.js";
import { gameOverScreen } from './bionic.js';
const topListScreen = document.querySelector('.top-list-container');
const topButton = document.querySelector('.menu-item-high');
const topImage = document.querySelector('.top-hangman');
const orderedListTop = document.querySelector('.ordered-top-list');

topButton.addEventListener('click', () => {
	gameScreen.classList.remove('show-game');
	gameOverScreen.style.display = 'none';
	topListScreen.style.display = 'block';
	console.log('Button works');
	createNewHighScore();
});

// let highScoreList = [
// 	{ name: 'Anton', points: 0 },
// 	{ name: 'Linda', points: 100 },
// 	{ name: 'Alina', points: 200 }
// ];

function createNewHighScore() {
	const username = userScoreTop.username;
	const newHighScore = { name: username, points: userScoreTop.points };
	
	let existingHighScoreList = JSON.parse(localStorage.getItem('highScoreList')) || [];
	existingHighScoreList.push(newHighScore);
	existingHighScoreList.sort((a, b) => b.points - a.points);
	
	// Update local storage with the modified list
	localStorage.setItem('highScoreList', JSON.stringify(existingHighScoreList));
	
	orderedListTop.innerText = '';
	const topScoreList = existingHighScoreList.map((highScore) => {
		const li = document.createElement('li');
		const nameUser = document.createElement('span');
		const pointsUser = document.createElement('span');
		nameUser.innerText = highScore.name;
		pointsUser.innerText = highScore.points;
		li.append(nameUser);
		li.append(pointsUser);
		return li;
	});
	
	topScoreList.forEach((top) => {
		orderedListTop.append(top);
	});
}
