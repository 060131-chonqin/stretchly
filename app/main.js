// process.on('uncaughtException', (...args) => console.error(...args))
const {app, BrowserWindow, Tray, Menu, ipcMain} = require('electron')
const path = require('path')

const Shuffled = require('./utils/shuffled')
const AppSettings = require('./utils/settings')

let microbreakIdeas = new Shuffled([
  'Go grab a glass of water.',
  'Slowly look all the way left, then right.',
  'Slowly look all the way up, then down.',
  'Close your eyes and take few deep breaths.',
  'Close your eyes and relax.',
  'Stretch your legs.',
  'Stretch your arms.',
  'Is your sitting pose correct?',
  'Slowly turn head to side and hold for 10 seconds.',
  'Slowly tilt head to side and hold for 5-10 seconds.',
  'Stand from chair and stretch.',
  'Refocus eyes on an object at least 20 meters away.',
  'Take a moment to think about something you appreciate.'
])

let appIcon = null
let microbreakWin = null
let appStartupWin = null
let aboutWin = null
let finishMicrobreakTimer
let startMicrobreakTimer
let planMicrobreakTimer
let settings

function createTrayIcon () {
  if (process.platform === 'darwin') {
    app.dock.hide()
  }
  const iconPath = path.join(__dirname, 'images/stretchly_18x18.png')
  appIcon = new Tray(iconPath)
  appIcon.setToolTip('stretchly - break time reminder app')
  appIcon.setContextMenu(getTrayMenu(false))
}

function showStartUpWindow () {
  const modalPath = path.join('file://', __dirname, 'start.html')
  appStartupWin = new BrowserWindow({
    frame: false,
    alwaysOnTop: true,
    title: 'stretchly',
    backgroundColor: settings.get('mainColor'),
    width: 600,
    height: 170
  })
  appStartupWin.loadURL(modalPath)
  setTimeout(function () {
    appStartupWin.close()
  }, 5000)
}

function startMicrobreak () {
  const modalPath = path.join('file://', __dirname, 'microbreak.html')
  microbreakWin = new BrowserWindow({
    frame: false,
    alwaysOnTop: true,
    backgroundColor: settings.get('mainColor'),
    title: 'stretchly'
  })
  microbreakWin.on('close', function () { microbreakWin = null })
  microbreakWin.loadURL(modalPath)
  // microbreakWin.webContents.openDevTools()
  microbreakWin.webContents.on('did-finish-load', () => {
    microbreakWin.webContents.send('breakIdea', microbreakIdeas.randomElement)
  })
  finishMicrobreakTimer = setTimeout(finishMicrobreak, settings.get('microbreakDuration'))
}

function finishMicrobreak () {
  microbreakWin.close()
  microbreakWin = null
  planMicrobreakTimer = setTimeout(planMicrobreak, 100)
}

function planMicrobreak () {
  startMicrobreakTimer = setTimeout(startMicrobreak, settings.get('microbreakInterval'))
}

ipcMain.on('finish-microbreak', function () {
  clearTimeout(finishMicrobreakTimer)
  finishMicrobreak()
})

let shouldQuit = app.makeSingleInstance(function (commandLine, workingDirectory) {
  if (appIcon) {
    // Someone tried to run a second instance
  }
})

if (shouldQuit) {
  console.log('stretchly is already running.')
  app.quit()
}

app.on('ready', loadSettings)
app.on('ready', createTrayIcon)
app.on('ready', planMicrobreak)
app.on('ready', showStartUpWindow)

app.on('window-all-closed', () => {
  // do nothing, so app wont get closed
})

function loadSettings () {
  const dir = app.getPath('userData')
  const settingsFile = `${dir}/config.json`
  settings = new AppSettings(settingsFile)
}

function pauseMicrobreaks () {
  if (microbreakWin) {
    clearTimeout(finishMicrobreakTimer)
    finishMicrobreak()
  }
  clearTimeout(planMicrobreakTimer)
  clearTimeout(startMicrobreakTimer)
  appIcon.setContextMenu(getTrayMenu(true))
}

function resumeMicrobreaks () {
  appIcon.setContextMenu(getTrayMenu(false))
  planMicrobreak()
}

function showAboutWindow () {
  const modalPath = path.join('file://', __dirname, 'about.html')
  aboutWin = new BrowserWindow({
    alwaysOnTop: true,
    backgroundColor: settings.get('mainColor'),
    title: 'About stretchly'
  })
  aboutWin.loadURL(modalPath)
}

function getTrayMenu (MicrobreaksPaused) {
  let trayMenu = []

  trayMenu.push({
    label: 'About',
    click: function () {
      showAboutWindow()
    }
  }, {
    type: 'separator'
  })

  if (MicrobreaksPaused) {
    trayMenu.push({
      label: 'Resume',
      click: function () {
        resumeMicrobreaks()
      }
    })
  } else {
    trayMenu.push({
      label: 'Pause',
      click: function () {
        pauseMicrobreaks()
      }
    })
  }

  trayMenu.push({
    type: 'separator'
  }, {
    label: 'Quit',
    click: function () {
      app.quit()
    }
  })

  return Menu.buildFromTemplate(trayMenu)
}
