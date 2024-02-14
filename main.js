import Game from './src/js/Game'
import Map from './src/js/Map'
import Player from './src/js/Player'
import Movement from './src/js/Movement'
import Coin from './src/js/Coin'
import UI from './src/js/UI'
import Storage from './src/js/Storage'
import { level } from './src/js/levels'
import { transformToSeconds } from './src/js/utils'
import Firebase from './src/js/Firebase'

export const storage = new Storage()
export const game = new Game()
export const coin = new Coin(game)
coin.soundOn = storage.loadAudioSettings()
export const map = new Map(game)
export const player = new Player(100, 50, game.ctx)
const movement = new Movement()
const ui = new UI(game)
export const firebase = new Firebase()
ui.updateSoundBtn()

window.addEventListener('load', resize)
window.addEventListener('resize', resize)
function resize() {
  let scaleFactor = window.innerWidth / game.standardCanvasWidth
  if (scaleFactor > 1.7) scaleFactor = 1.7
  game.newScale(scaleFactor * 0.92)
  ui.resize()
}

export function animate(timestamp = 0) {
  game.deltatime = timestamp - game.lasttime
  if (game.deltatime > 100) game.deltatime = 20
  game.lasttime = timestamp

  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
  ui.updateScore(game.score)
  if (game.pause || game.gameover || !game.gameStarted) {
    return
  }

  if (game.score >= game.scoreToFinish) {
    game.timeFinished = transformToSeconds(game.time)
    if (
      transformToSeconds(game.time) < game.highscore ||
      !game.highscore
    ) {
      game.isNewHighscore = true
      game.highscore = transformToSeconds(game.time)
      storage.store(game.highscore)
    }
    game.gameover = true
    ui.setYourTime()
    ui.toggleRestartScreen()
  }

  if (game.score >= 5 && !level.levelTwo.loaded) {
    map.loadLevelTwo(game.canvas)
  } else if (game.score >= 10 && !level.levelThree.loaded) {
    map.loadLevelThree(game.canvas)
  } else if (game.score >= 15 && !level.levelFour.loaded) {
    map.loadLevelFour(game.canvas)
  }

  ui.setTimer()
  game.ctx.save()
  game.ctx.scale(game.scale, game.scale)
  player.update(map.tiles, movement)
  coin.update(player, map.tiles, game)
  game.ctx.drawImage(map.levelBackground, 0, 0)
  game.ctx.restore()

  requestAnimationFrame(animate)
}
animate()
