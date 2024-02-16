export default class Storage {
  constructor() {}

  loadHighscore() {
    if (localStorage.getItem('highscore')) {
      return parseFloat(JSON.parse(localStorage.getItem('highscore')))
    }
  }

  isHighscoreSet() {
    if (localStorage.getItem('highscore')) {
      return true
    }
  }

  store(time) {
    localStorage.setItem('highscore', JSON.stringify(time))
  }

  storeAudioSettings(soundOn) {
    localStorage.setItem('audio', soundOn)
  }

  loadAudioSettings() {
    if (localStorage.getItem('audio')) {
      if (localStorage.getItem('audio') == 'false') {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }
}
