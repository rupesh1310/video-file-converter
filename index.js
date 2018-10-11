
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  new BrowserWindow({
      height: 600,
      width: 800,
      webPreferences: { backgroundThrottling: false }
  });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
