// Firstpage
const playBtn = document.querySelector('.play-btn')
const startScreen = document.querySelector('#start-display')
const selectScreen = document.querySelector('#selection')
const gameScreen = document.querySelector('#game-screen')

playBtn.addEventListener('click', () => {
	startScreen.classList.add('hide')
	selectScreen.classList.add('show')
	
})
// Selection page
const easyBtn = document.querySelector('#try-btn')
const hardBtn = document.querySelector('#hard-btn')

easyBtn.addEventListener('click', ()=> {
	selectScreen.classList.remove('show')
	gameScreen.classList.add('show-game')	
})

const userName = document.querySelector('#user-input')
const saveBtn = document.querySelector('.save-btn')
const key = 'Username'
const playerName = document.querySelector('#user-name')

let json = localStorage.getItem(key)

try {
	let object = JSON.parse(json)
	userName.value = object.user
}
catch {
	console.log('Nåt gick fel. Försök spara igen.')
}

easyBtn.addEventListener('click', () => {
	let user = userName.value
	let data = {
		user: user
	}
	playerName.innerText = userName.value
	let json = JSON.stringify(data)
	
	localStorage.setItem(key, json)
})

import{words} from './svenska-ord.js'

const slumpatOrd = slumpmassigtOrd(words)
function slumpmassigtOrd(ordLista) {
	const index = Math.floor(Math.random() * ordLista.length);
	return ordLista.splice(index, 1)[0];
}

const lattaOrd = [];
const svåraOrd = [];


for (let i = 0; i < words.length; i++) {
	const currentWord = words[i];
	if (currentWord.length <= 10) {
		lattaOrd.push(currentWord);
	}else {
		svåraOrd.push(currentWord);
	}
}
console.log(lattaOrd, svåraOrd);