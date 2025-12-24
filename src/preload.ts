const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('executeSQL', (sql: string) => ipcRenderer.invoke('executeSQL', sql))
contextBridge.exposeInMainWorld('setNativeLoader', (shown: boolean) => ipcRenderer.send('setNativeLoader', shown))