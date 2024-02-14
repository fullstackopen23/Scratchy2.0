import Tile from './Tile'
import { level } from './levels'

export default class Map {
  constructor(game) {
    this.tiles = []
    this.levelBackground
    this.standardCanvasWidth = game.standardCanvasWidth
    this.standardCanvasHeight = game.standardCanvasHeight
    this.loadLevelOne(game.canvas)
  }

  reset() {
    level.levelTwo.loaded = false
    level.levelThree.loaded = false
    level.levelFour.loaded = false
  }

  loadLevelOne(canvas) {
    this.createBorderAroundCanvas(canvas)
    this.createTilesFrom2dArray(level.levelOne.map)
    this.levelBackground = level.levelOne.image
    level.levelOne.loaded = true
  }

  loadLevelTwo(canvas) {
    this.createBorderAroundCanvas(canvas)
    this.createTilesFrom2dArray(level.levelTwo.map)
    this.levelBackground = level.levelTwo.image
    level.levelTwo.loaded = true
  }

  loadLevelThree(canvas) {
    this.createBorderAroundCanvas(canvas)
    this.createTilesFrom2dArray(level.levelThree.map)
    this.levelBackground = level.levelThree.image
    level.levelThree.loaded = true
  }

  loadLevelFour(canvas) {
    this.createBorderAroundCanvas(canvas)
    this.createTilesFrom2dArray(level.levelFour.map)
    this.levelBackground = level.levelFour.image
    level.levelFour.loaded = true
  }

  createTilesFrom2dArray(input) {
    input.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol != 1) {
          const tile = new Tile(j * 16, i * 16, 16, 16)
          this.tiles.push(tile)
        }
      })
    })
  }

  createBorderAroundCanvas(canvas) {
    this.tiles = [
      new Tile(0, -10, this.standardCanvasWidth, 10),
      new Tile(-10, 0, 10, this.standardCanvasHeight),
      new Tile(
        0,
        this.standardCanvasHeight,
        this.standardCanvasWidth,
        10
      ),
      new Tile(
        this.standardCanvasWidth,
        0,
        10,
        this.standardCanvasHeight
      ),
    ]
  }
}
