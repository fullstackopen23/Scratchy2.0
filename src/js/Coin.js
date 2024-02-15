import { collides } from './utils'
const coinImg = document.getElementById('coin')
const coinAudio = new Audio('/audio/coin.mp3')

export default class Coin {
  constructor(game) {
    this.width = 16
    this.height = 16
    this.canvas = game.canvas
    this.x = Math.random() * this.canvas.width - this.width
    this.y = Math.random() * this.canvas.height - this.height
    this.ctx = game.ctx
    this.spriteWidth = 16
    this.spriteHeight = 16
    this.frameX = 0
    this.maxFrames = 4
    this.counter = 0
    this.intervall = 10
    this.standardCanvasWidth = game.standardCanvasWidth
    this.standardCanvasHeight = game.standardCanvasHeight
    this.soundOn = true
  }
  draw() {
    this.ctx.drawImage(
      coinImg,
      this.spriteWidth * this.frameX,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  update(player, tiles, game) {
    for (let i = 0; i < tiles.length; i++) {
      if (collides(this, tiles[i])) {
        this.resetPosition(tiles)
        break
      }
    }

    this.draw()
    const playerHitbox = {
      x: player.hitbox.x,
      y: player.hitbox.y,
      width: player.hitbox.width,
      height: player.hitbox.height,
    }

    if (collides(playerHitbox, this)) {
      game.score++
      console.log(this.soundOn)
      if (this.soundOn) {
        console.log(this.soundOn)
        coinAudio.play().catch((err) => console.log(err))
        if (coinAudio.paused) {
          coinAudio.play().catch((err) => console.log(err))
        } else {
          coinAudio.currentTime = 0
        }
      }

      this.resetPosition(tiles)
    }

    /* Sprites animation */
    if (this.counter > this.intervall) {
      this.counter = 0
      this.frameX++
      if (this.frameX >= this.maxFrames) {
        this.frameX = 0
      }
    } else {
      this.counter++
    }
  }

  resetPosition(tiles) {
    const newCoin = {
      x: Math.random() * this.standardCanvasWidth - this.width,
      y: Math.random() * this.standardCanvasHeight - this.height,
      height: this.height,
      width: this.width,
    }
    for (let i = 0; i < tiles.length; i++) {
      if (collides(newCoin, tiles[i])) {
        this.resetPosition(tiles)
        break
      } else {
        this.x = newCoin.x
        this.y = newCoin.y
      }
    }
  }
}
