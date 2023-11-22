const playBtn = document.querySelector('.play-btn')
const startScreen = document.querySelector('#start-display')
const selectScreen = document.querySelector('#selection')

playBtn.addEventListener('click', () => {
	startScreen.classList.add('hide')
	selectScreen.classList.add('show')

})

