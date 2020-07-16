const discord = require("discord.js");


module.exports.run = async(bot, message, args) =>{
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No");

    if (!args[0]) return message.reply("Who?");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("cannot find user");

    if(mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("No");

    var muteRole = message.guild.roles.cache.get('590248822479912972');
    if(!muteRole) return message.channel.send("no muted role found");


    await(mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} has been muted.`);

}

module.exports.help = {
    name: "mute",
    description: "Shhhhh",
    category: "Moderation"
}