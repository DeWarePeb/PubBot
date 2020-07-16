const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "579871760967532564";
    
    var userName = message.author.username;
    var userDiscriminator = message.author.discriptinator;

    var ticketAlready = false;

    message.guild.channels.cache.forEach(channel => {

        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketAlready = true;

            message.reply("You already have a ticket");

            return;
        }

        
    });
   if (ticketAlready) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hello" + message.author.username)
        .setFooter("Ticket is being made.");
    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES:false,
                        VIEW_CHANNEL: false
                    });
                   
                    settedParent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES:true,
                        VIEW_CHANNEL: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });

                    var embedParent = new discord.MessageEmbed()
                     .setTitle(`Hi ${message.author.username}`)
                     .setDescription("Put your problem/question here.");

                     settedParent.send(embedParent);
                









                }
            ).catch(err => {
                message.channel.send("something went wrong");
            });
        }
     ).catch(err => {
         message.channel.send("something went wrong");
     });
    
   

}

module.exports.help = {
    name: "ticket",
    description: "Hi",
    category: "Fun"
}