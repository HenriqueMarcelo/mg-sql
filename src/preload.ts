const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('executeSQL', (sql: string) => ipcRenderer.invoke('executeSQL', sql))