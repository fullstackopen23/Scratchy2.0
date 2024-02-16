const spaceBtn = document.getElementById('space')
const dBtn = document.getElementById('dButton')
const aBtn = document.getElementById('aButton')
import abBtnImg from '../img/controls/Ab.png'
import dbBtnImg from '../img/controls/Db.png'
import spacebBtnImg from '../img/controls/SPACEb.png'
import aBtnImg from '../img/controls/A.png'
import dBtnImg from '../img/controls/D.png'
import spaceBtnImg from '../img/controls/SPACE.png'

export default class Movement {
  constructor() {
    this.left = false
    this.right = false
    this.up = false
    this.isJumping = false
    this.setupMovement()
  }

  setupMovement() {
    document.addEventListener('keydown', (e) => {
      switch (e.key.toLowerCase()) {
        case 'd':
          this.handleGoRight()
          break
        case 'arrowright':
          this.handleGoRight()
          break
        case 'arrowleft':
          this.handleGoLeft()
          break
        case 'a':
          this.handleGoLeft()
          break
        case 'w':
          this.handleJump()
          break
        case ' ':
          this.handleJump()
          break
        case 'arrowup':
          this.handleJump()
          break
      }
    })
    document.addEventListener('keyup', (e) => {
      switch (e.key.toLowerCase()) {
        case 'd':
          this.handleGoRightKeyup()
          break
        case 'arrowright':
          this.handleGoRightKeyup()
          break
        case 'arrowleft':
          this.handleGoLeftKeyup()
          break
        case 'a':
          this.handleGoLeftKeyup()
          break
        case 'w':
          this.handleJumpKeyup()
          break
        case ' ':
          this.handleJumpKeyup()
          break
        case 'arrowup':
          this.handleJumpKeyup()
          break
      }
    })

    //jumping
    spaceBtn.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault()
        this.handleJump()
      },
      { passive: true }
    )
    spaceBtn.addEventListener('touchend', (e) => {
      e.preventDefault()
      this.handleJumpKeyup()
    })
    spaceBtn.addEventListener('mousedown', (e) => {
      e.preventDefault()

      this.handleJump()
    })
    spaceBtn.addEventListener('mouseup', (e) => {
      e.preventDefault()

      this.handleJumpKeyup()
    })

    //move right
    dBtn.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault()

        this.handleGoRight()
      },
      { passive: true }
    )
    dBtn.addEventListener('touchend', (e) => {
      e.preventDefault()

      this.handleGoRightKeyup()
    })
    dBtn.addEventListener('mousedown', (e) => {
      e.preventDefault()

      this.handleGoRight()
    })
    dBtn.addEventListener('mouseup', (e) => {
      e.preventDefault()

      this.handleGoRightKeyup()
    })

    //move left
    aBtn.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault()

        this.handleGoLeft()
      },
      { passive: true }
    )
    aBtn.addEventListener('touchend', (e) => {
      e.preventDefault()

      this.handleGoLeftKeyup()
    })
    aBtn.addEventListener('mousedown', (e) => {
      e.preventDefault()

      this.handleGoLeft()
    })
    aBtn.addEventListener('mouseup', (e) => {
      e.preventDefault()

      this.handleGoLeftKeyup()
    })
  }

  handleJump() {
    this.up = true
    spaceBtn.src = spacebBtnImg
  }
  handleJumpKeyup() {
    this.up = false
    spaceBtn.src = spaceBtnImg
  }

  handleGoRight() {
    this.right = true
    dBtn.src = dbBtnImg
  }
  handleGoRightKeyup() {
    this.right = false
    dBtn.src = dBtnImg
  }

  handleGoLeft() {
    this.left = true
    aBtn.src = abBtnImg
  }
  handleGoLeftKeyup() {
    this.left = false
    aBtn.src = aBtnImg
  }
}
