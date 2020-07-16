const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
    
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("no");
    
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("no perms");
    
        if (!args[0]) return message.reply("who?");
    
        if (!args[1]) return message.reply("why?");
    
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    
        var reason = args.slice(1).join(" ");
    
        if (!kickUser) return message.reply("cannot find member.");

        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
    
        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** kicked:** ${kickUser} (${kickUser.id})
            **kicked by:** ${message.author}
            **reason: ** ${reason}`);
    
        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("React whitin 30 sec")
            .setDescription(`do you want to kick ${kickUser}?`);
    
    
        message.channel.send(embedPrompt).then(async msg => {
    
            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
    
    
            // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
            // message.channel.awaitMessages(m => m.author.id == message.author.id,
            //     { max: 1, time: 30000 }).then(collected => {
    
            //         if (collected.first().content.toLowerCase() == 'yes') {
            //             message.reply('Kick speler.');
            //         }
            //         else
            //             message.reply('Geanuleerd');
    
            //     }).catch(() => {
            //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
            //     });
    
    
            if (emoji === "✅") {
    
                msg.delete();
    
                kickUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Something went wrong.`);
                });
    
                message.reply(embed);
    
            } else if (emoji === "❌") {
    
                msg.delete();
    
                message.reply("Kick canceled").then(m => m.delete(5000));
    
            }
    
        });
    }
    
    

    // Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;
    
    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }
    
    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    
    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "kick",
    description: "get outta here",
    category: "Moderation"
}