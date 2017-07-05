var express = require('express'),
request = require('request'),
multer  = require('multer');

const NotificationCenter = require('node-notifier').NotificationCenter;

var upload = multer({ dest: '/tmp/' });
var app = express();
var notifier = new NotificationCenter();

// function gotReply(req, res, next)
// {
// 	var test = JSON.parse(res);
// 	//console.log(test)
// 	// console.log(res)
// 	// console.log(next)
// 	var payload = JSON.parse(res.body.payload);
//   //console.log('Got webhook for', payload.event);
//
//   // If the right player is playing a track, display a notification.
//   if (payload.Player.uuid = process.env.PLAYER && payload.event == "media.play" && payload.Metadata.type == "track")
// 	{
//     notifier.notify({
//       title: payload.Metadata.grandparentTitle,
//       subtitle: payload.Metadata.parentTitle,
//       message: payload.Metadata.title,
//       sender: 'com.plexapp.plexmediaserver',
//       contentImage: req.file ? req.file.path : ''
//     });
//   }
//   res.sendStatus(200);
// }

var options =
{
  headers:
	{
    'X-Plex-Token': process.env.TOKEN,
    'X-Plex-Target-Client-Identifier': process.env.PLAYER
  }
};

switch(process.env.OPTION)
{
	case 'play':
		console.log('Media key: play');
	  options.url = 'https://plex.tv/player/playback/play';
	  request(options);
		break;
	case 'pause':
		console.log('Media key: pause');
		options.url = 'https://plex.tv/player/playback/pause';
		request(options);
		break;
	case 'next':
		console.log('Media key: next');
		options.url = 'https://plex.tv/player/playback/skipNext';
		request(options);
		break;
	case 'back':
		console.log('Media key: back');
		options.url = 'https://plex.tv/player/playback/skipPrevious';
		request(options);
		break
	case 'default':
		console.log("Invalid option specified");
}
