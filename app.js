var express = require('express');
var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var wav = require('wav');

var port = 3700;
//var outFile = 'demo.wav';
var app = express();
const Speaker = require('speaker');
app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port);

console.log('server open on port ' + port);

binaryServer = BinaryServer({port: 9001});

binaryServer.on('connection', function(client) {
  console.log('new connection');

//  var fileWriter = new wav.FileWriter(outFile, {
//    channels: 1,
//    sampleRate: 48000,
//    bitDepth: 16
//  });

  client.on('stream', function(stream, meta) {
    console.log('new stream');
//    stream.pipe(fileWriter);
    stream.pipe(speaker);
    stream.on('end', function() {
//      fileWriter.end();
	speaker.end();
//      console.log('wrote to file ' + outFile);
	console.log('ending stream');
    });
  });
});
const speaker = new Speaker({
  channels: 1,          // 2 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 48000,     // 44,100 Hz sample rate
  device: 'default'	//device - The name of the playback device. E.g. 'hw:0,0' or 'default'
});
