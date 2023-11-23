const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld(
    'app',
    {
        savedata: (type,data) => ipcRenderer.send('savedata',type,data),
        getdata: () => 
    }
)