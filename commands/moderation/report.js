const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();

        // Either a mention or ID
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No person found
        if (!rMember)
            return message.reply("Cannot find that person?").then(m => m.delete(5000));

        // The member has BAN_MEMBERS or is a bot
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Can't Report that Member.").then(m => m.delete(5000));

        // If there's no argument
        if (!args[1])
            return message.channel.send("Please provide a reason for the Report.").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        // No channel found
        if (!channel)
            return message.channel.send("Cannot find a `#reports` Channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#6a0dad")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported Members", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.user.id})
            **> Reported by:** ${message.member}
            **> Reported in:** ${message.channel}
            **> Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}