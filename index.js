
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const _ = require('lodash');
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


    const promises = _.map(videos, video => {
      // promise.then((metadata) => {console.log(metadata);})
        return new Promise((resolve, reject) => {
              ffmpeg.ffprobe(video.path, (err, metadata) => {
                resolve(video);
            });
        });

      });
    Promise.all(promises)
    .then((results) => console.log(results));
  });

