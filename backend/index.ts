import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "node:path";
import { isDev, NOFIFY_SCRIPT } from "./constants";

let whatsapp: BrowserWindow;

function createWindow(): void {
  whatsapp = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  whatsapp.loadURL('https://web.whatsapp.com', {
    userAgent: "Mozilla/5.0 (X11; Linux i686; rv:138.0) Gecko/20100101 Firefox/138.0"
  });

  whatsapp.setTitle("SC - Whatsapp Desktop");
  whatsapp.setMenu(null);

  whatsapp.webContents.on('did-finish-load', () => {
    whatsapp.webContents.executeJavaScript(NOFIFY_SCRIPT);
  });

  whatsapp.webContents.on('page-title-updated', (_event, title) => {
    const match = title.match(/\((\d+)\)/);
    const count = match ? match[1] : '';
    console.log({ count, title })
  })

  if (isDev) {
    whatsapp.webContents.openDevTools();
    whatsapp.maximize();
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(async () => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on("notificationClick", () => {
  if (whatsapp) {
    if (whatsapp.isMinimized()) whatsapp.restore();
    whatsapp.show();
    whatsapp.focus();
  }
});



