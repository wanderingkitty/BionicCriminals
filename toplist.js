let userScoreTop = {
	username: '',
	points: 0
}

export { userScoreTop }

//Toplist page
import { gameScreen } from "./bionic.js"
import { gameOverScreen } from './bionic.js'
const topListScreen = document.querySelector('.top-list-container')
const cheerHigh = document.querySelector('#cheer-word')
const topButton = document.querySelector('.menu-item-high')
const topImage = document.querySelector('.top-hangman')
const orderedListTop = document.querySelector('.ordered-top-list')


topButton.addEventListener('click', () =>{
	gameScreen.classList.remove('show-game')
	gameOverScreen.style.display = 'none'
	topListScreen.style.display = 'block'
	console.log('Button works');
	createNewHighScore(highScoreList)
})

let highScoreList = [
	{ name: 'Anton', points: 0},
	{ name: 'Linda', points: 100},
	{ name: 'Alina', points: 200}
]

function createNewHighScore(list) {
	const topScoreList = list.map(highScoreList =>{
		const li = document.createElement('li')
		const nameUser = document.createElement('span')
		const pointsUser = document.createElement('span')
		nameUser.innerText = highScoreList.name
		pointsUser.innerText = highScoreList.points
		li.append(nameUser)
		li.append(pointsUser)
		return li
	})
	topScoreList.forEach(top =>{
		orderedListTop.append(top)
	})
}



