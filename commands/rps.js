const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
    if(!args[0]) return message.reply("Use rps <Rock, Paper, Scissors>");

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0].toUpperCase() =="ROCK"){

        if(result == "paper"){
            return message.channel.send(`i got ${result} :notepad_spiral:, i win!`);

        }else if(result == "scissors"){
            return message.channel.send(`i got ${result} :scissors:, you win!`);
        
        }else if(result == "paper"){
            return message.channel.send(`i got ${result} :moyai: its even`);
        }
            
        

    }

    else if(args[0].toUpperCase() =="PAPER"){

        if(result == "scissors"){
            return message.channel.send(`i got ${result} :scissors:, i win!`);

        }else if(result == "rock"){
            return message.channel.send(`i got ${result} :moyai:, you win!`);
        
        }else if(result == "paper"){
            return message.channel.send(`i got ${result} :notepad_spiral: its even`);
        }
            
           

    }
    else if(args[0].toUpperCase() =="SCISSORS"){

        if(result == "rock"){
            return message.channel.send(`i got ${result} :moyai:, i win!`);

        }else if(result == "paper"){
            return message.channel.send(`i got ${result} :notepad_spiral:, you win!`);
        
        }else if(result == "scissors"){
            return message.channel.send(`i got ${result} :scissors: its even`);
        }
            
           

    }



}

module.exports.help = {
    name: "rps",
    description: "Hi",
    category: "fun"
}