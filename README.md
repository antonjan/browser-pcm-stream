# browser-pcm-stream

It streams pcm chunks from the browser's mic to a node server using websockets. Those chunks are piped into alsa sound card interface.<br>
This a bransh will allow for the Js server to send the audio to the ALSA sound cart and not write the mic from broswer to wave file<br>
## Project Status
For now it only works on local host I am am bussy adding the https server as the API only alow remote ip mic streaming if the server is HTTPS.<br>
## Description
I am using the Speaker libraty to send the audio from server to the sound card.<br>
You can define the ALSA interface.<br>
device - The name of the playback device. E.g. 'hw:0,0' for first device of first sound card or 'hw:1,0' for first device of second sound card. Defaults to null which will pick the default device.<br>
This application only works on localhost to localhost.
## Dependency
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
