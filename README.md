Discord-Jack
=================

Stereo audio capture discord bot. Tested with the Raspberry Pi and the Griffin Technology iMic USB Audio Interface.

### Raspberry Pi Setup

This program requires NodeJS 8.x which can only be installed on newer ARMv7 or ARMv8 chips such as the Pi 2 or Pi 3.

Install Node 8.x

    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get update
    sudo apt-get install nodejs

Install ffmpeg.

    sudo apt-get install ffmpeg

Now continue to the regular installation instructions.

### Installation

Make sure you have Node JS 8.x installed.

Clone the repo.

    git clone git@github.com:chandwki/Discord-Jack.git

Install npm dependencies.

    cd Discord-Jack
    npm install

Copy the config.json.example file to config.json and edit it.

To create a discord bot token follow the [instructions here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

Also add your discord server "guild" name and the name of the channel you want the bot pipe your audio to.
