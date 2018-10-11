
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

ipcMain.on('VIDEOS_ADDED', (event, videos) => {
    const promise = new Promise((resolve, reject) => {
        let ffmpeg = fluent_ffmpeg(videos[0].path).setFfprobePath('C:\\Users\\Ben\\ffmpeg\\bin\\ffprobe.exe');
        ffmpeg.ffprobe(videos[0].path, (err, metadata) => {
            resolve(metadata);
        });
    });

    promise.then((metadata) => {console.log(metadata);})
});
