const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    var botEmbed = new discord.MessageEmbed()
               .setTitle("Crew Logo")
               .setColor("#0099ff")
               .setImage("https://cdn.discordapp.com/attachments/625873846452486175/720644029829611560/image0.jpg");
        
        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "logo",
    description: "logo",
    category: "Information"
}
