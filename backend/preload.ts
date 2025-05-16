import { ipcRenderer } from "electron";

window.addEventListener("message", (event) => {
    if (event.data?.type === "notification-click") {
        ipcRenderer.send("notificationClick");
    }
});
