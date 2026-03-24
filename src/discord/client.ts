import { Client, GatewayIntentBits, Partials, Events, MessageReaction, User } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

export function createClient() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  });

  client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  client.on(Events.MessageReactionAdd, async (reaction, user) => {
    // When a reaction is received, check if the structure is partial
    if (reaction.partial) {
      // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
      try {
        await reaction.fetch();
      } catch (error) {
        console.error('Something went wrong when fetching the message:', error);
        return;
      }
    }

    // Filter out the bot's own reactions
    if (user.id === client.user?.id) return;

    const emojiName = reaction.emoji.name;
    console.log(`User ${user.tag} reacted with ${emojiName} to message: ${reaction.message.content}`);
  });

  return client;
}

export default createClient();

