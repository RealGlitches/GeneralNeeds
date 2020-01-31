const Discord = require('discord.js');
const Bot = new Discord.Client();

module.exports = {
    name: 'serverinfo',
    category: 'information',
    description: 'Basic SeverInfo',
    run: async (Bot, message, args) => {
        const serverinfo = new Discord.RichEmbed()
        .setColor('#6a0dad')
        .setTitle('GeneralNeeds - ServerInfo')
        .setDescription('GeneralNeeds (Open Source Code)')
        .setTimestamp()
        .setAuthor(`GeneralNeeds`, Bot.user.avatarURL)
        .addField(`Users`, `${Bot.users.size}`, true)
        .addField(`Servers`, `${Bot.guilds.size}`, true)
        .addField(`Version`, `1.0.0`, true)
        .setFooter("Prefix: - || GeneralNeeds OpenSource", "https://imgur.com/OyUbSLD.png")

        message.channel.send(serverinfo);
    }
}