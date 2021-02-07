const { TOKEN, CHANNEL, GUILD, STATUS, LIVE} = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

client.on("ready", async () => { 
    client.user.setActivity(STATUS);
    let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL);

    if(!channel) return;
    const connection = await channel.join();
    connection.play(ytdl(LIVE))
});

client.on("message", async () => {
If(message.content.startsWith === "!ping") {
message.channel.send(`This numbers are nothing to me really! : \`${client.ws.ping}\``)
}

elseIf(message.content.startsWith === "!channel") {
message.channel.send(`Voice Channel - ${CHANNEL}`)
}

elseIf(message.content.startsWith === "!YT") {
message.channel.send(`YT Channel - ${LIVE}`)
}
else {
console.log(message)
}
});

setInterval(async function() {
    if(!client.voice.connection.get(GUILD)) {
        let channel = client.channels.get(CHANNEL) || await client.channels.fetch(CHANNEL);
        if(!channel) return;

        const connection = await channel.join();
        connection.play(ytdl(LIVE))
    }
}, 10000);

client.login(TOKEN)
