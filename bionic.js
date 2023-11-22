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

