const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no");
 
    if (!args[0]) return message.reply("how many?");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => {
 
            if (args[0] == 0) {
 
                message.reply(`stupid`).then(msg => msg.delete({timeout: 5000}));
           
            } else if (args[0] == 1) {
           
                message.reply(`deleted 1 message`).then(msg => msg.delete({timeout: 5000}));
           
            } else {
           
                message.reply(`deleted ${args[0]} messages`).then(msg => msg.delete({timeout: 5000}));
           
            }
 
        });
 
    } else {
        return message.reply("how many");
    }

}

module.exports.help = {
    name: "clear",
    description: "bye bye message",
    category: "Moderation"
}