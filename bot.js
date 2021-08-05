require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
    console.log("Bot is ready to go !!!!");

});

client.on('messageDelete', msg => {
    msg.channel.send("Stop deleting messages");
});

client.on('message', msg => {
    if(msg.content == "Hello there")
    {
        msg.react("😎");
    }

    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`)
    {
        // console.log(msg);

        modUser(msg.member);

        // msg.channel.send("Not tagged");
        // msg.reply("Pong");
    }
});


function modUser(member)
{
    member.roles.add("872655488217645086");
}


client.login(process.env.BOT_TOKEN);


