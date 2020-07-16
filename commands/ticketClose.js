const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
    const categoryID = "579871760967532564";

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply("no");

    if(message.channel.parentID == categoryID){
        message.channel.delete();

        var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("ticket," + message.channel.name)
        .setDescription("ticket is marked **complete**")
        .setFooter("ticket closed");
   
       var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "secret-log");
       if (!ticketChannel) return message.reply("channel doesnt exsist");
   
       ticketChannel.send(embedCreateTicket);
   
    } else {

        message.channel.send("wrong channel");

    }

}

module.exports.help = {
    name: "close",
    description: "Hi",
    category: "Fun"
}