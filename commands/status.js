const discord = require("discord.js");
const client = new discord.Client();

module.exports.run = async(client, message, args) =>{
    //OWNER ONLY COMMAND
  if (!message.member.hasPermission("EDIT_ROLES")) {
    return message.channel.send("This command can only be used by big boys")
  }
  //ARGUMENT
  if(!args.length) {
    return message.channel.send("Please give status message")
  }
  
  client.user.setPresence({ activity: { name: args.join(" ") }})
 await message.channel.send("Updated the bot status");
    

}

module.exports.help = {
    name: "status",
    description: "Hi",
    category: "Fun"
}