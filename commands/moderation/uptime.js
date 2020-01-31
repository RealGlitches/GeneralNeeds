const Discord = require('discord.js');
const Bot = new Discord.Client();

module.exports = {
    name: 'uptime',
    category: 'moderation',
    description: 'Basic Moderation Information',
    run: async (Bot, message, args) => {
        const msg = await message.channel.send(`Getting Information...`);
        const uptime = new Discord.RichEmbed()
        .setColor('#6a0dad')
        .setTitle('GeneralNeeds - Uptime')
        .setDescription('GeneralNeeds (Open Source Code)')
        .setTimestamp()
        .addField("API Latency Is: ", `${Math.round(Bot.ping)} ms`)
        .addField("Latency Is: ", `${Math.floor(msg.createdAt - message.createdAt)}`)
        .setFooter("Prefix: - || GeneralNeeds OpenSource", "https://imgur.com/OyUbSLD.png")

        message.channel.send(uptime);
    }
}