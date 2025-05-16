import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("whatsAppBridge", {
    sendMessageEvent: (msg: any) => ipcRenderer.send("new-incoming-message", msg),
    notifyClick: () => ipcRenderer.send("notificationClick")
});
