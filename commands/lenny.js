const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    return message.channel.send("( ͡° ͜ʖ ͡°)");

}

module.exports.help = {
    name: "lenny",
    description: "Hi",
    category: "Fun"
}