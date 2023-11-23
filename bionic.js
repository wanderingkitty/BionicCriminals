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

let json = localStorage.getItem(key)

	try {
		let object = JSON.parse(json)
		userName.value = object.user
	}
	catch {
		console.log('Nåt gick fel. Försök spara igen.')
	}

	saveBtn.addEventListener('click', () => {
		let user = userName.value
		let data = {
			user: user
		}
		
		let json = JSON.stringify(data)
	
	localStorage.setItem(key, json)
})
