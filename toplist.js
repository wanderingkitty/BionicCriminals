let userScoreTop = {
	username: '',
	points: 0
}

export { userScoreTop }

//Toplist page
import { gameScreen } from "./bionic.js"
const topListScreen = document.querySelector('.top-list-container')
const cheerHigh = document.querySelector('#cheer-word')
const topButton = document.querySelector('.menu-item-high')

topButton.addEventListener('click', () =>{
	gameScreen.classList.remove('show-game')
	topListScreen.classList.add('top-list-container')
	topListScreen.classList.remove('show-game')
	console.log('Button works');
})