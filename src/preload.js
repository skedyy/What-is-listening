const { contextBridge, ipcRenderer, ipcMain} = require('electron')

contextBridge.exposeInMainWorld(
    'app',
    {
        savedata: (name,data) => ipcRenderer.send('savedata',name,data),
        getdata: (callback) => ipcRenderer.on('getdata',callback),
        getdat: (type) => ipcRenderer.send('getdat'),
        removedata: (data) => ipcRenderer.send('removedata',data)
    }
)