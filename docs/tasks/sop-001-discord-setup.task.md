# SOP-001: Set up Discord Bot and Reaction Listener

## Description
Initialize the Discord bot using `discord.js` and implement a robust listener for `messageReactionAdd` events.

## Goals
- Successfully connect the bot to the Discord Gateway.
- Correctly log and identify specific reactions (🎫, 🐛) from users.
- Filter out bot's own reactions.

## Technical Details
- **Module**: `src/discord/client.ts`
- **Events**: `ClientEvents.MessageReactionAdd`
- **Dependencies**: `discord.js`, `dotenv`

## Implementation Steps
- [ ] Initialize Node.js project and install `discord.js`.
- [ ] Create basic bot client with necessary intents (Guilds, GuildMessages, GuildMessageReactions).
- [ ] Implement `messageReactionAdd` handler.
- [ ] Test reaction detection in a developer channel.

## Acceptance Criteria
- [ ] The bot shows as "Online" in Discord.
- [ ] Console logs the correct emoji name when a user reacts to a message.
