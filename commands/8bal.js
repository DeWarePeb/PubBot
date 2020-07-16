const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var question = message.content.slice(client.prefix.length + 6);
    if (!question)
        return message.channel.send(`You did not specify your question!`);
    else {
        var responses = [
            "Yes",
            "No",
            "Definetly",
            "Absoloutely",
            "Not in a million years",
        ];
        var response =
            responses[Math.floor(Math.random() * responses.length - 1)];
        var Embed = new discord.MessageEmbed()
            .setTitle(`8Ball!`)
            .setDescription(`Your question: ${question}\nMy reply: ${response}`)
            .setColor(`RANDOM`);
        message.channel.send(Embed);


    }

}





module.exports.help = {
    name: "8ball",
    description: "Hi",
    category: "Fun"
}