const spaceBtn = document.getElementById('space')
const dBtn = document.getElementById('dButton')
const aBtn = document.getElementById('aButton')

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
          e.preventDefault()
          this.handleJumpKeyup()
          break
        case 'arrowup':
          this.handleJumpKeyup()
          break
      }
    })

    //jumping
    spaceBtn.addEventListener('touchstart', (e) => {
      e.preventDefault()
      this.handleJump()
    })
    spaceBtn.addEventListener('touchend', (e) => {
      e.preventDefault()
      this.handleJumpKeyup()
    })
    spaceBtn.addEventListener('mousedown', (e) => {
      this.handleJump()
    })
    spaceBtn.addEventListener('mouseup', (e) => {
      this.handleJumpKeyup()
    })

    //move right
    dBtn.addEventListener('touchstart', (e) => {
      this.handleGoRight()
    })
    dBtn.addEventListener('touchend', (e) => {
      this.handleGoRightKeyup()
    })
    dBtn.addEventListener('mousedown', (e) => {
      this.handleGoRight()
    })
    dBtn.addEventListener('mouseup', (e) => {
      this.handleGoRightKeyup()
    })

    //move left
    aBtn.addEventListener('touchstart', (e) => {
      this.handleGoLeft()
    })
    aBtn.addEventListener('touchend', (e) => {
      this.handleGoLeftKeyup()
    })
    aBtn.addEventListener('mousedown', (e) => {
      this.handleGoLeft()
    })
    aBtn.addEventListener('mouseup', (e) => {
      this.handleGoLeftKeyup()
    })
  }

  handleJump() {
    this.up = true
    spaceBtn.src = 'src/img/controls/SPACEb.png'
  }
  handleJumpKeyup() {
    this.up = false
    spaceBtn.src = 'src/img/controls/SPACE.png'
  }

  handleGoRight() {
    this.right = true
    dBtn.src = 'src/img/controls/Db.png'
  }
  handleGoRightKeyup() {
    this.right = false
    dBtn.src = 'src/img/controls/D.png'
  }

  handleGoLeft() {
    this.left = true
    aBtn.src = 'src/img/controls/Ab.png'
  }
  handleGoLeftKeyup() {
    this.left = false
    aBtn.src = 'src/img/controls/A.png'
  }
}
