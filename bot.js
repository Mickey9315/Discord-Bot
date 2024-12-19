require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = process.env.DISCORD_BOT_TOKEN;

// Bot login event
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// Event: Respond to messages
client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore other bots

  if (message.content.toLowerCase() === 'hello') {
      message.reply('Hello there! 👋');
  }

  if (message.content.toLowerCase() === 'how are you?') {
      message.reply('I am just a bot, but I am doing great! 😊');
  }

  if (message.content.toLowerCase() === '!help') {
    message.reply('You can use me in this server.');
}

});


client.login(TOKEN);
