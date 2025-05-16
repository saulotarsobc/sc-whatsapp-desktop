import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import { isDev } from "./constants";
import { initLogs } from "./utils";

function createWindow(): void {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadURL('https://web.whatsapp.com', {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0',
  });

  if (isDev) {
    win.webContents.openDevTools();
    win.maximize();
  } else {
    win.setMenu(null);
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(async () => {
  initLogs();
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
