//Dependencies
const Discord = require("discord.js")

//Variables
const Bot = new Discord.Client()

//Main
Bot.on("ready", ()=>{
    console.log("Bot is running.")
})

Bot.on("message", (message)=>{
    if(message.content == ".test"){
        message.reply("Test")
    }
})

//Login
Bot.login("DiscordBotToken")
