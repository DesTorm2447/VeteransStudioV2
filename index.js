const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("NzA4MzkwNTM4OTU2NTA1MTQ5.XrWqGQ.6cgONUXbRnDcfRmU2wNgS4ur6zg")
