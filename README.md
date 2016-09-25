# stretchly [![Build Status](https://travis-ci.org/hovancik/stretchly.svg?branch=master)](https://travis-ci.org/hovancik/stretchly)[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![bitHound Overall Score](https://www.bithound.io/github/hovancik/stretchly/badges/score.svg)](https://www.bithound.io/github/hovancik/stretchly) [![bitHound Dependencies](https://www.bithound.io/github/hovancik/stretchly/badges/dependencies.svg)](https://www.bithound.io/github/hovancik/stretchly/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/hovancik/stretchly/badges/devDependencies.svg)](https://www.bithound.io/github/hovancik/stretchly/master/dependencies/npm) [![bitHound Code](https://www.bithound.io/github/hovancik/stretchly/badges/code.svg)](https://www.bithound.io/github/hovancik/stretchly)

<img src="https://rawgit.com/hovancik/stretchly/master/stretchly_128x128.png" align="right">

> break time reminder app

*stretchly* is [electron](http://electron.atom.io/) app that reminds you to take breaks when working with computer.

It runs in your tray and shows reminder window every 10 minutes, that is open for 20 seconds (or until closed early). The window contains idea for microbreak.

You can pause/resume reminding of breaks.

## Install

Latest installers can be found [here](https://github.com/hovancik/stretchly/releases).

You can create one by running `npm run pack` or `npm run dist` after  `npm install`.

## Running from source

To run app you will need [nodejs](https://nodejs.org/). Clone the repo, run `npm install` and then simply do `npm run` to start *stretchly*.

It should run on any electron supported platform. Tested on OS X, Windows and Ubuntu Linux.

### Linux note
Please see http://electron.atom.io/docs/api/tray/ for Electron's Tray Linux specifics. Having `libappindicator1` installed should be enough for *stretchly*.

## Development

Feel free to join development of this app via Issues and Pull Requests.

### TODOs and Ideas
- [x] tests
- [x] PR tools
- [x] make installers/executables
- [x] create about page
- [x] only one instance
- [ ] notification on 2nd instance
- [ ] create longer breaks (5min every 30 minutes)
- [x] create settings for breaks
- [x] remember settings after restart
- [ ] autostart app
- [ ] start break anytime from menu
- [ ] create keyboard shortcuts

### Contributors
*(by date of the first contribution)*

- Jan Hovancik, @hovancik, [hovancik.net](https://hovancik.net)
- Martina Mocinecova, (*stretchly* logo), color schemes

### Humans and Tools
 - https://github.com/typefoo/node-icns
 - https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
 - http://web.stanford.edu/dept/EHS/prod/general/ergo/microbreaks.html
 - http://www.latofonts.com/lato-free-fonts/

## License
See LICENSE file.
