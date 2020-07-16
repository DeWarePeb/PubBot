const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{
   
    var botEmbed = new discord.MessageEmbed()
    .setTitle("Bot Info")
    .setColor("#0099ff")
    .addField("Bot Name", client.user.username)
return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info",
    description: "Bot info",
    category: "Information"
}