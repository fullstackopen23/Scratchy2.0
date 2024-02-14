const char1 = document.getElementById('char1')
const char2 = document.getElementById('char2')

export default class Sprite {
  constructor() {
    this.spriteWidth = 50
    this.spriteHeight = 50
    this.frameX = 0
    this.frameY = 0
    this.image = char1
    this.maxFrames = 0
    this.counter = 0
    this.intervall = 2
    this.lastDirection = 'right'
  }

  idleRight() {
    this.frameY = 0
    this.maxFrames = 4
  }

  idleLeft() {
    this.frameY = 1
    this.maxFrames = 4
  }

  jumpRight() {
    this.frameY = 2
    this.maxFrames = 2
  }

  jumpLeft() {
    this.frameY = 3
    this.maxFrames = 2
  }

  goRight() {
    this.frameY = 4
    this.maxFrames = 6
    this.lastDirection = 'right'
  }

  goLeft() {
    this.frameY = 5
    this.maxFrames = 6
    this.lastDirection = 'left'
  }

  fallRight() {
    this.frameY = 8
    this.maxFrames = 2
  }

  fallLeft() {
    this.frameY = 9
    this.maxFrames = 2
  }
}
