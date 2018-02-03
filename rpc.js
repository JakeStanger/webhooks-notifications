/* eslint-disable no-console */

const path = require('path');
const DiscordRPC = require('discord-rpc');
const fs = require('fs');

// don't change the client id if you want this example to work
const ClientId = '286914938201440256';

// only needed for discord allowing spectate, join, ask to join
DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

function readFile(path) {
    return fs.readFileSync(path,{ encoding: 'utf8' });
}

async function setActivity() {
  if (!rpc) return;

  isPaused = readFile("/home/jake/.conky/data/paused") == 'True'

  track = readFile('/home/jake/.conky/data/track');
  album = readFile('/home/jake/.conky/data/album');
    if(album == "") isPaused = true;
  artist = readFile('/home/jake/.conky/data/artist');

  //console.log(`Setting activity to ${track} - ${album} by ${artist}`)

  if(!isPaused) {
    rpc.setActivity({
      details: `${track} - ${artist}`,
      state: `${album}`,
       largeImageKey: 'logo_large',
      instance: false,
    });
  }
  else
  {
    rpc.setActivity({
      details: `Nothing.`,
      state: `--`,
      instance: false,
    });
  }
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login(ClientId).catch(console.error);
