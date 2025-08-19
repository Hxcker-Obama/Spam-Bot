const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

let spam = false;
let channel = null;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.content === ".start") {
        spam = true;
        channel = await client.channels.fetch(message.channel.id).catch(() => null);
        message.channel.send("Spamming started!");
    } else if (message.content === ".stop") {
        spam = false;
        message.channel.send("Spamming stopped!");
    };

    setInterval(async () => {
        if (spam && channel) {
            await channel.send("nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga");
        }
    }, 2000); // Adjust the interval as needed
});

client.login(process.env["TOKEN"]);
