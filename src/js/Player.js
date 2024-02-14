import { collides } from './utils'
import Sprite from './Sprite'
import { game } from '../../main'

export default class Player {
  constructor(x, y, ctx) {
    this.x = x
    this.y = y
    this.height = 60
    this.width = 60
    this.vy = 0
    this.vx = 0
    this.weight = 0.5
    this.ctx = ctx
    this.sprite = new Sprite()
    this.onGround = false
    this.hitbox = {
      x: this.x + 20,
      y: this.y + 12,
      width: this.width - 40,
      height: this.height - 25,
    }
  }

  draw() {
    /*  this.ctx.fillStyle = 'rgba(15, 165, 0, 1)'
    this.ctx.fillRect(
      this.hitbox.x,
      this.hitbox.y,
      this.hitbox.width,
      this.hitbox.height
    )
    this.ctx.fillStyle = 'rgba(15, 165, 0, 0.2)'
    this.ctx.fillRect(this.x, this.y, this.width, this.height) */

    this.ctx.drawImage(
      this.sprite.image,
      this.sprite.spriteWidth * this.sprite.frameX,
      this.sprite.spriteHeight * this.sprite.frameY,
      this.sprite.spriteWidth,
      this.sprite.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  reset() {
    this.vx = 0
    this.vy = 0
  }

  handleJump(movement) {
    this.vy = -12 * game.deltatime * (1 / 16)
    movement.isJumping = true
    this.onGround = false
    if (this.sprite.lastDirection === 'right') {
      this.sprite.jumpRight()
    } else if (this.sprite.lastDirection === 'left') {
      this.sprite.jumpLeft()
    }
  }

  handleGoRight() {
    this.vx = 2.5 * game.deltatime * (1 / 16)
    this.sprite.goRight()
  }

  handleGoLeft() {
    this.vx = -2.5 * game.deltatime * (1 / 16)
    this.sprite.goLeft()
  }

  update(tiles, movement) {
    this.draw()
    this.updateHitbox()
    this.applyGravity()

    if (movement.right) {
      this.handleGoRight()
    } else if (movement.left) {
      this.handleGoLeft()
    } else {
      this.vx = 0
      if (
        this.sprite.lastDirection === 'right' &&
        !movement.isJumping
      ) {
        this.sprite.idleRight()
      } else if (
        this.sprite.lastDirection === 'left' &&
        !movement.isJumping
      ) {
        this.sprite.idleLeft()
      }
    }

    if (movement.up && !movement.isJumping) {
      this.handleJump(movement)
    }

    if (this.vy > 0 && !this.onGround) {
      if (this.sprite.lastDirection === 'right') {
        this.sprite.fallRight()
      } else if (this.sprite.lastDirection === 'left') {
        this.sprite.fallLeft()
      }
    }

    const newPlayerXCoordinates = {
      x: this.hitbox.x + this.vx,
      y: this.hitbox.y,
      width: this.hitbox.width,
      height: this.hitbox.height,
    }
    const newPlayerYCoordinates = {
      x: this.hitbox.x,
      y: this.hitbox.y + this.vy,
      width: this.hitbox.width,
      height: this.hitbox.height,
    }

    //vertical collision
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i]
      if (collides(newPlayerYCoordinates, tile)) {
        if (this.vy >= 0) {
          //console.log('collides: top of tile')
          const offset = this.hitbox.y - this.y + this.hitbox.height
          movement.isJumping = false
          this.onGround = true
          this.y = tile.y - offset - 0.02
        } else if (this.vy < 0) {
          //console.log('collides: bottom of tile')
          const offset = this.hitbox.y - this.y
          this.y = tile.y + tile.height - offset + 0.02
        }
        this.vy = 0
        break
      }
    }
    //horizontal collision
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i]
      if (collides(newPlayerXCoordinates, tile)) {
        if (this.vx > 0) {
          //console.log('collides: left of tile')
          const offset =
            this.x + this.width - this.hitbox.x - this.hitbox.width
          this.x = tile.x - this.width + offset - 0.02
        } else if (this.vx < 0) {
          //console.log('collides: right of tile')
          const offset = this.hitbox.x - this.x
          this.x = tile.x + tile.width - offset + 0.02
        }
        this.vx = 0
        break
      }
    }

    /* Sprites animation */
    if (this.sprite.counter > this.sprite.intervall) {
      this.sprite.counter = 0
      this.sprite.frameX++
      if (this.sprite.frameX >= this.sprite.maxFrames) {
        this.sprite.frameX = 0
      }
    } else {
      this.sprite.counter++
    }
    this.y += this.vy
    this.x += this.vx
    this.updateHitbox()
  }

  applyGravity() {
    this.vy += this.weight * game.deltatime * (1 / 16)
  }

  updateHitbox() {
    this.hitbox.x = this.x + 20
    this.hitbox.y = this.y + 12
  }
}
