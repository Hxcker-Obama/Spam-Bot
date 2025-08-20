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
let spamInterval = null; // This will store the reference to our ONE interval

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.content === ".start") {
        if (spamInterval) {
            clearInterval(spamInterval);
        }
        spam = true;

        const targetChannel = message.channel;
        await message.channel.send("Spamming started!").catch(console.error); // Catch send errors

        spamInterval = setInterval(async () => {
            if (spam && targetChannel) {
                await targetChannel.send("nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga nga")
                    .catch(error => {
                        console.error("Failed to send message:", error);
                    });
            }
        }, 500);

    } else if (message.content === ".stop") {
        spam = false;
        if (spamInterval) {
            clearInterval(spamInterval);
            spamInterval = null;
        }
        message.channel.send("Spamming stopped!").catch(console.error);
    };
});

client.login(process.env.TOKEN);
