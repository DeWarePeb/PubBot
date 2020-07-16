const { formatDate } = require("../functions.js");

const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
        var mem = message.guild.members.cache
          .filter((m) => !m.user.bot)
          .sort((a, b) => a.user.createdAt - b.user.createdAt)
          .first();
        var Embed = new discord.MessageEmbed()
          .setTitle(`The oldest member in ${message.guild.name}`)
          .setColor(`RANDOM`)
          .setFooter(`Date format: MM/DD/YYYY`)
          .setDescription(
            `${mem.user.tag} is the oldest user in ${
              message.guild.name
            }! Account creation date: ${formatDate(mem.user.createdAt)}`
          );
        message.channel.send(Embed);

}

module.exports.help = {
    name: "old",
    description: "Hi",
    category: "Fun"
}