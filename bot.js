//Requirements
const Discord = require('discord.js')
const Bot = new Discord.Client();

//Place Your Bot Token Here.
const Token = 'NjcyNDYwNzI5NzA1ODI0Mjc2.XjL0Cw.PQ_lXgkq8OHvTfZagKx8uqShPB8';

//bot's Online Messgae.
Bot.on('ready', () => {})
    console.log('GernalNeeds is online!');

Bot.on('message', async message => {
    //Change the prefix to anything you would like.
    const prefix = '-';

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    //Command #1
    if (cmd === 'uptime') {
        const msg = await message.channel.send(`Getting Information...`);
        //msg.edit(`Latency is ${Math.floor(msg.createdAt - message.createdAt)}\nAPI Latency ${Math.round(Bot.ping)}ms`);
        const uptime = new Discord.RichEmbed()
        .setColor('#6a0dad')
        .setTitle('GeneralNeeds - Uptime')
        .setDescription('GeneralNeeds (Open Source Code)')
        .setTimestamp()
        .addField("API Latency Is: ", `${Math.round(Bot.ping)} ms`)
        .addField("Latency Is: ", `${Math.floor(msg.createdAt - message.createdAt)}`)
        message.channel.send(uptime);
    }
})

//This registers the Bot.
Bot.login(Token);