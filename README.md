# browser-pcm-stream

It streams pcm chunks from the browser's mic to a node server using websockets. Those chunks are piped into alsa sound card interface.<br>
This a bransh will allow for the Js server to send the audio to the ALSA sound cart and not write the mic from broswer to wave file<br>
## Project Status
For now it only works on local host I am am bussy adding the https server as the API only alow remote ip mic streaming if the server is HTTPS.<br>
## Description
I am using the Speaker library to send the audio from server to the sound card using ALSA.<br>
You can define the ALSA interface.<br>
device - The name of the playback device.<br> 
E.g. 'hw:0,0' for first device of first sound card or 'hw:1,0' for first device of second sound card.<br> 
Defaults to null which will pick the default audio device.<br>
This application only works on localhost to localhost for now. Until I have the https server working.
## Dependency
The following needs be be run in the browser-pcm-stream directory.<br>
You will need to get the binaryjs.js from https://github.com/binaryjs/binaryjs/tree/master/dist

    sudo apt-get install libasound2-dev
    sudo curl https://www.npmjs.com/install.sh | sudo sh
    npm install express --save
    npm install speaker --saveopenssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
    rm csr.pem

To start run:

    node app.js

Then go to `http://localhost:3700` and make a recording. It should create a wav file in your project's folder.
The https server will run on `http://local_ip_not_localhost:8000` for you to be able to connect via remote desktop browser.
