const EventEmitter = require('events')

class DndManager extends EventEmitter {
  constructor (settings) {
    super()
    this.settings = settings
    this.monitorDnd = settings.get('monitorDnd')
    this.timer = null
    this.isOnDnd = false
    if (this.monitorDnd) {
      this.start()
    }
  }

  start () {
    this.monitorDnd = true
    this._checkDnd()
  }

  stop () {
    this.monitorDnd = false
    this.isOnDnd = false
    clearTimeout(this.timer)
    this.timer = null
  }

  get _doNotDisturb () {
    if (this.monitorDnd) {
      let focusAssist
      try {
        focusAssist = require('windows-focus-assist').getFocusAssist().value
      } catch (e) { focusAssist = -1 } // getFocusAssist() throw an error if OS isn't windows

      return require('@meetfranz/electron-notification-state').getDoNotDisturb() || (focusAssist !== -1 && focusAssist !== 0)
    } else {
      return false
    }
  }

  _checkDnd () {
    let lastDndStatus = this.isOnDnd  //eslint-disable-line
    this.timer = setInterval(() => {
      const doNotDisturb = this._doNotDisturb
      if (!this.isOnDnd && doNotDisturb) {
        this.isOnDnd = true
        this.emit('dndStarted')
      }
      if (this.isOnDnd && !doNotDisturb) {
        this.isOnDnd = false
        this.emit('dndFinished')
      }
      lastDndStatus = doNotDisturb
    }, 1000)
  }
}

module.exports = DndManager
