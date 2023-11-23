const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld(
    'appApi',
    {
        close: () => ipcRenderer.send('close'),
    }
)