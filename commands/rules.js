const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    var botEmbed = new discord.MessageEmbed()
    .setTitle("Crew Rules")
    .setColor("#0099ff")
    .addFields(
        {name: "Rule 1", value:"**DO NOT** go afk in public sessions , if you are going to do so , simply just warp to your facility or apartment, or just go to story mode, if we find out you got killed or stabbed for being afk it."},
        {name: "Rule 2", value: "**DO NOT** accept random friend request, and do no exceed above 300 friends"},
        {name: "Rule 3", value: "**DO NOT** use any alien weapons , if your not confident at fighting don’t fight at all"}
    );

return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "rules",
    description: "Rules",
    category: "Information"
}