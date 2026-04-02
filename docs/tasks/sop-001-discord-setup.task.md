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
- [x] Initialize Node.js project and install `discord.js`.
- [x] Create basic bot client with necessary intents (Guilds, GuildMessages, GuildMessageReactions).
- [x] Write unit tests for the Discord client using Vitest and `discordjs-mock`.
- [x] Implement `messageReactionAdd` handler.
- [x] Test reaction detection in a developer channel.

## Acceptance Criteria
- [x] The bot shows as "Online" in Discord.
- [x] Console logs the correct emoji name when a user reacts to a message.
- [x] **TDD**: All unit tests for the reaction listener pass locally.


working