const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helpEmbed = new discord.MessageEmbed()
        .setTitle("Bot help")
        .setColor("#0099ff")
        .setDescription(`**Fun commands** \n /rps - Rock Paper Sissors command \n /hi - says hi \n /lenny - ( ͡° ͜ʖ ͡°) \n\n **Info commands** \n /avatar - gives the avatar of a member \n /info - Gives information about the bot \n /logo - gives the crew logo \n /rules - gives the crew rules \n /server-info - gives information about the server \n /suggestion - make a suggestion \n /ticket - open a ticket \n\n **Moderation commands** \n /ban - ban someone \n /clear - delete messages from a channel \n /kick - kick someone \n /mute - mute someone \n /tempmute - temp mute someone \n /unmute - unmute someone `)
        .setTimestamp()
    return message.channel.send(helpEmbed);


}

module.exports.help = {
    name: "help",
    description: "gives all of the commands",
    category: "Information"
}