# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- possibility to change break/microbreak ideas via editing config file

### Changed
- break window is shown when it's ready

## [0.5.1] - 2016-12-05
### Fixed
- some grammar

### Added
- more break ideas

## [0.5.0] - 2016-11-28
### Added
- strict mode - breaks/microbreaks can't be finished early
- build for ia32 and x64

### Fixed
- wrong window placement when on Linux and more displays

## [0.4.0] - 2016-11-05
### Fixed
- version check when offline

### Changed
- settings window split into 2

### Added
- longer breaks
- enable/disable microbreaks and breaks
- skip to next break/microbreak anytime from menu
- notification on breaks resume
- notification when entering Settings that settings are applied once changed
- reset settings to the defaults
- reset (restart) breaks from menu

## [0.3.0] - 2016-10-15
### Added
- possibility to pause reminders for different times
- autostart for Windows and macOS
- check for the latest version on About page, on app start
- remind new version via notification and tray menu

## [0.2.1] - 2016-10-10
### Fixed
- double init of event listeners on settings page

## [0.2.0] - 2016-10-08
### Added
- sounds at the end of microbreak
- settings for sounds

## [0.1.1] - 2016-10-04
### Fixed
- Linux builds and permissions

## [0.1.0] - 2016-09-26
### Added
- update npm packages
- rename strechly to stretchly (grammar, yay!)
- allows only one instance of app
- settings for microbreak (duration, interval)
- 5 color scheme

## [0.0.1] - 2016-09-06
### Added
- simple electron app with break reminder after 10 minutes
- randomized reminders (without repetition)
- startup window
- resume/pause functionality for reminder
- scripts for creating installers for OS X, Windows, Linux

[Unreleased]: https://github.com/hovancik/stretchly/compare/v0.5.1...HEAD
[0.5.1]: https://github.com/hovancik/stretchly/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/hovancik/stretchly/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/hovancik/stretchly/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/hovancik/stretchly/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/hovancik/stretchly/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/hovancik/stretchly/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/hovancik/stretchly/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/hovancik/stretchly/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/hovancik/stretchly/compare/1a4817679dc840716ae7694c1bbb1f357a571097...v0.0.1
