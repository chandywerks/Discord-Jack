const mic = require('mic');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login( config.discord.token )
.catch( () => {
    console.log('Unable to log in with provided token.');
    process.exit();
});

// Enable mic debug
config.mic.debug = true;

// Init audio capture
let micInstance = mic( config.mic );
let audioStream = micInstance.getAudioStream();

client.on('ready', () => {
    // Filter channels down to voice channels in the guild specified in config file
    let channels = client.channels.filter( channel => {
        return channel.guild.name === config.discord.guild && channel.type === 'voice';
    });

    // Find the specific channel by name
    let channel = channels.find('name', config.discord.channel);

    if( !channel ) {
        console.log('Unable to find voice channel "' + config.discord.channel
            + '" in the guild "' + config.discord.guild
            + '". Please check your config and try again.'
        );

        process.exit();
    }

    // Join the channel
    channel.join()
    .then( connection => {
        console.log('Connected...');

        // Start the audio stream
        connection.playConvertedStream( audioStream );
        micInstance.start();
    })
    .catch( () => {
        console.log('Unable to connect to the voice channel');
        console.error;
        process.exit();
    });
});
