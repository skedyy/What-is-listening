const { app, BrowserWindow, ipcMain, protocol } = require('electron')
const path = require('path')
let mainWindow
require('electron-reload')(__dirname)
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
      let deeplinkingUrl = commandLine
      var url = commandLine.pop();
      commandLine.push(url);
      url = url.slice(17,-226)
      if (process.platform == 'win32') {
        if(url == "home"){
        var deepurl = deeplinkingUrl.pop()
        deeplinkingUrl = deepurl.slice(23)
        mainWindow.loadURL(path.join(__dirname, 'app/login.html?'+deeplinkingUrl))
        }
        else{

        }
      }
    }
  })
}
app.on('ready', () => {
  if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('whatslistening', process.execPath, [path.resolve(process.argv[1])])
    }
  } else {
    app.setAsDefaultProtocolClient('whatslistening')
  }
    mainWindow = new BrowserWindow({
        width: 1168,
        height: 700,
    webPreferences: {
        preload: path.join(__dirname, "preload.js")
    }
    })
mainWindow.loadURL(path.join(__dirname, "index.html"))
})
