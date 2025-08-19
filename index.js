const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot is alive!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

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
