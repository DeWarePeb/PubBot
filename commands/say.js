const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    return message.channel.send(`${args}`);

}

module.exports.help = {
    name: "say",
    description: "Hi",
    category: "Fun"
}