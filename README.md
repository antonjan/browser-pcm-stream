It streams pcm chunks from the browser's mic into a node server through websockets. Those chunks are piped into node-wav FileWriter.
This a bransh will allow for the Js server to send the audio to the ALSA sound cart and not write the mic from broswer to wave file<br>

I am using the Speaker libraty to send the audio from server to the sound card
You can define the ALSA interface.<br>
device - The name of the playback device. E.g. 'hw:0,0' for first device of first sound card or 'hw:1,0' for first device of second sound card. Defaults to null which will pick the default device.
## Dependincy
    sudo apt-get install libasound2-dev<br>
    sudo curl https://www.npmjs.com/install.sh | sudo sh<br>
    npm install express --save<br>
    npm install Speaker --save<br>


To start run:

    node app.js

Then go to `http://localhost:3700` and make a recording. It should create a wav file in your project's folder.
