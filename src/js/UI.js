import { animate, storage } from '../../main'
import { coin } from '../../main'
import { player } from '../../main'
import { game } from '../../main'
import { firebase } from '../../main'
import { map } from '../../main'
import { transformToSeconds } from './utils'

const shopScreen = document.querySelector('.shopScreen')
const menuScreen = document.querySelector('.menuScreen')
const leaderboardScreen = document.querySelector('.leaderboardScreen')

const startGameBtn = document.getElementById('startGameBtn')

const submitBtn = document.getElementById('submitBtn')
const nameInput = document.getElementById('nameInput')
const char1 = document.getElementById('char1')
const char2 = document.getElementById('char2')
const input = document.querySelector('.input')
const controlsContainer = document.getElementById('controlsContainer')
const canvasWrapper = document.querySelector('.canvasWrapper')
const tableBody = document.getElementById('tableBody')

const pauseBtn = document.getElementById('pauseBtn')
const timer = document.getElementById('timer')
const timerWrapper = document.querySelector('.timerWrapper')
const scoreText = document.getElementById('score')
const soundBtn = document.getElementById('soundBtn')
const shopBtn = document.getElementById('shopBtn')
const logo = document.getElementById('logo')

const closeShopBtn = document.getElementById('closeShopBtn')
const closeLeaderboardBtn = document.getElementById(
  'closeLeaderboardBtn'
)

const char1Shop = document.getElementById('char1Shop')
const char2Shop = document.getElementById('char2Shop')
const yourTime = document.getElementById('yourTime')

const yourHighscore = document.getElementById('yourHighscore')
const leaderboardBtn = document.getElementById('leaderboardBtn')

const restartScreen = document.querySelector('.restartScreen')
const restartBtn = document.querySelector('#restartBtn')

export default class UI {
  constructor(game) {
    this.game = game
    this.shopOpen = false
    this.menuOpen = true
    this.leaderboardOpen = false
    this.addListeners()
  }

  resize() {
    controlsContainer.style.width = this.game.canvas.width + 'px'
    canvasWrapper.style.width = this.game.canvas.width + 'px'
    canvasWrapper.style.height = this.game.canvas.height + 'px'
    menuScreen.style.height = this.game.canvas.height + 'px'
    menuScreen.style.width = this.game.canvas.height + 'px'
    timerWrapper.style.width = this.game.canvas.width + 'px'
    logo.style.width = this.game.canvas.width * 0.7 + 'px'
  }

  addListeners() {
    startGameBtn.addEventListener('click', () => {
      if (this.game.gameStarted && this.game.pause) {
        this.handleUnpause()
        this.closeAllScreens()
      } else if (this.game.gameover) {
        this.restartGame()
        this.closeAllScreens()
      } else {
        this.game.startGame()
        this.closeAllScreens()
        animate()
      }
    })

    pauseBtn.addEventListener('click', () => {
      if (!this.game.gameStarted || this.game.gameover) return

      if (this.game.pause) {
        this.handleUnpause()
        menuScreen.classList.add('inactive')
      } else {
        this.game.pause = true
        this.game.timeWhenPaused = Date.now()
        menuScreen.classList.remove('inactive')
      }
      if (this.shopOpen || this.menuOpen || this.leaderboardOpen) {
        this.closeAllScreens()
      }
    })

    soundBtn.addEventListener('click', () => {
      if (coin.soundOn) {
        coin.soundOn = false
        soundBtn.src = '../src/img/menu/sound_off.png'
      } else {
        coin.soundOn = true
        soundBtn.src = '../src/img/menu/sound.png'
      }
      storage.storeAudioSettings(coin.soundOn)
    })

    shopBtn.addEventListener('click', () => {
      this.openShopScreen()
    })

    closeLeaderboardBtn.addEventListener('click', () => {
      this.openMenuScreen()
    })

    closeShopBtn.addEventListener('click', () => {
      if (this.shopOpen) {
        this.openMenuScreen()
      }
    })

    char1Shop.addEventListener('click', () => {
      char1Shop.classList.add('selected')
      char2Shop.classList.remove('selected')
      player.sprite.image = char1
    })

    char2Shop.addEventListener('click', () => {
      char2Shop.classList.add('selected')
      char1Shop.classList.remove('selected')
      player.sprite.image = char2
    })

    restartBtn.addEventListener('click', () => {
      restartScreen.classList.toggle('inactive')
      input.classList.add('inactive')
      this.restartGame()
    })

    leaderboardBtn.addEventListener('click', async () => {
      this.openLeaderboardScreen()
    })

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault()
      if (!nameInput.value || !nameInput.value.trim()) {
        alert('Please enter a name')
        return
      }
      const data = {
        name: nameInput.value.trim(),
        time: this.game.timeFinished,
      }
      firebase.add(data)
      restartScreen.classList.toggle('inactive')
      input.classList.add('inactive')
      this.openLeaderboardScreen()
    })
  }

  updateSoundBtn() {
    if (coin.soundOn) {
      soundBtn.src = '../src/img/menu/sound.png'
    } else {
      soundBtn.src = '../src/img/menu/sound_off.png'
    }
  }

  openShopScreen() {
    this.closeAllScreens()
    this.shopOpen = true
    shopScreen.classList.remove('inactive')
  }

  async openLeaderboardScreen() {
    this.closeAllScreens()
    const data = await firebase.load()
    const topTen = data.sort((a, b) => a.time - b.time).slice(0, 10)
    const topTenHtml = topTen.map((player, index) => {
      return `<tr>
          <td>${index + 1}</td>
          <td>${player.name}</td>
          <td>${player.time}s</td>
        </tr>`
    })
    tableBody.innerHTML = topTenHtml.join('')
    this.leaderboardOpen = true
    leaderboardScreen.classList.remove('inactive')
  }

  openMenuScreen() {
    this.closeAllScreens()
    this.menuOpen = true
    menuScreen.classList.remove('inactive')
  }

  closeAllScreens() {
    this.shopOpen = false
    this.menuOpen = false
    this.leaderboardOpen = false
    shopScreen.classList.add('inactive')
    menuScreen.classList.add('inactive')
    leaderboardScreen.classList.add('inactive')
  }

  restartGame() {
    game.lasttime = 0
    game.restartGame()
    map.reset()
    map.loadLevelOne(game.canvas)
    player.reset()
    animate()
  }

  setYourTime() {
    yourTime.innerHTML = `Your time:  ${transformToSeconds(
      this.game.time
    )}s`
    if (this.game.isNewHighscore) {
      input.classList.remove('inactive')
      yourHighscore.innerHTML = `New highscore: ${this.game.highscore}s`
      this.game.isNewHighscore = false
    } else {
      yourHighscore.innerHTML = `Your highscore: ${this.game.highscore}s`
    }
  }

  handleUnpause() {
    this.game.pause = false
    this.game.timePaused = Date.now() - this.game.timeWhenPaused
    this.game.time = this.game.time + this.game.timePaused
    game.lasttime = 0
    animate()
  }

  toggleRestartScreen() {
    restartScreen.classList.toggle('inactive')
  }

  updateScore(score) {
    scoreText.innerHTML = `Score: ${score}`
  }

  setTimer() {
    timer.innerHTML = `Time: ${transformToSeconds(this.game.time)}s`
  }
}
