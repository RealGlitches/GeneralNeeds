//Requirements
const Discord = require('discord.js');
const Bot = new Discord.Client();
Bot.commands = new Discord.Collection();
Bot.aliases = new Discord.Collection();

//Place Your Bot Token Here.
const Token = 'NjcyNDYwNzI5NzA1ODI0Mjc2.Xj2ilQ.9BUt5qKghVLag-y_D8_tANU2Fcs';

// Collections
Bot.commands = new Discord.Collection();
Bot.aliases = new Discord.Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(Bot);
});

//Bot's Online Messgae.
Bot.on('ready', () => {})
    console.log('GeneralNeeds is online!');

Bot.on('message', async message => {
    //Change the prefix to anything you would like.
    const prefix = '-';

    if (message.author.Bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = Bot.commands.get(cmd);
    if (!command) command = Bot.commands.get(Bot.aliases.get(cmd));

    if (command)
        command.run(Bot, message, args);
});

//This registers the Bot.
Bot.login(Token);
