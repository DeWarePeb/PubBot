const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))


module.exports.run = async(bot, message, args) =>{

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No");

    if (!args[0]) return message.reply("Who?");

    if (!args[1]) return message.reply("No reason");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("cannot find user");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err)console.log(err);
    })


    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(warnUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** warned:** ${warnUser} (${warnUser.id})
        **Warned By:** ${message.author}
        **Reason: ** ${reason}`)
        .addField("Number of warns", warns[warnUser.id].warns);

        var channel = message.member.guild.channels.cache.get("700265762174009384");

        if(!channel) return;

        channel.send(embed);

        if (warns[warnUser.id].warns == 2) {
            var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(warnUser.user.displayAvatarURL)
            .setDescription("watch out one more strike and say hi to bootcamp!")
            .addField("Number of warns", warns[warnUser.id].warns);

            message.channel.send(embed);

        }


}

module.exports.help = {
    name: "warn",
    description: "Strike",
    category: "Moderation"
}