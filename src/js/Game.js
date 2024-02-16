import { storage } from '../../main'

export default class Game {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = 320
    this.canvas.height = 320
    this.score = 0
    this.gameover = false
    this.scale = 1
    this.standardCanvasWidth = 320
    this.standardCanvasHeight = 320
    this.time = 0
    this.pause = false
    this.gameStarted = false
    this.timePaused = 0
    this.timeWhenPaused = 0
    this.scoreToFinish = 20
    this.timeFinished = null
    this.highscore = null
    this.isNewHighscore = false
    this.lasttime = 0
    this.deltatime = 1
    if (storage.isHighscoreSet()) {
      this.highscore = storage.loadHighscore()
    }
  }

  newScale(newScale) {
    this.scale = newScale
    this.canvas.width = 320 * this.scale
    this.canvas.height = 320 * this.scale
  }

  startGame() {
    this.gameStarted = true
    this.time = Date.now()
  }

  restartGame() {
    this.score = 0
    this.time = 0
    this.time = Date.now()
    this.gameover = false
  }
}
