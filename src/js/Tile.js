export default class Tile {
  constructor(x, y, width, height) {
    this.height = height
    this.width = width
    this.x = x
    this.y = y
  }

  draw(ctx) {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
