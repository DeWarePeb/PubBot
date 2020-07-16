const { formatDate } = require("../functions.js");

const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    var mem = message.guild.members.cache
    .filter((m) => !m.user.bot)
    .sort((a, b) => b.user.createdAt - a.user.createdAt)
    .first();
  var Embed = new discord.MessageEmbed()
    .setTitle(`The youngest member in ${message.guild.name}`)
    .setColor(`RANDOM`)
    .setFooter(`Date format: MM/DD/YYYY`)
    .setDescription(
      `${mem.user.tag} is the youngest user in ${
        message.guild.name
      }! Account creation date: ${formatDate(mem.user.createdAt)}`
    );
  message.channel.send(Embed);
}

module.exports.help = {
    name: "young",
    description: "Hi",
    category: "Fun"
}