

  const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    if(!args.length) {
        return message.channel.send("Please Give the Suggestion")
      }
      
      let channel = message.guild.channels.cache.find((x) => (x.name === "📥suggestions" || x.name === "📥suggestions"))
      
      
      if(!channel) {
        return message.channel.send("there is no channel with name - suggestions")
      }
                                                      
      
      var embed = new discord.MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
      .setColor("#000000")
      .setDescription(args.join(" "))
      .setTimestamp()
      
      
      channel.send(embed).then(m => {
        m.react("✅")
        m.react("❌")
      })
      
      
      message.delete();

}

module.exports.help = {
    name: "suggest",
    description: "Hi",
    category: "Fun"
}