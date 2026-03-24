# SOP-003: Map Reaction Emojis to YouTrack Issue Types

## Description
Develop the logic to map specific Discord emoji reactions (🎫, 🐛) to their corresponding YouTrack issue types (Task, Bug) and project IDs.

## Goals
- Create a configuration-driven mapping between emojis and YouTrack types.
- Ensure the bot can distinguish between different trigger emojis and act accordingly.
- Support channel-specific or guild-specific project mapping.

## Technical Details
- **Module**: `src/config/mapping.ts`
- **Logic**: A lookup object or service that returns `{ project: string, type: string }` based on the emoji name.

## Implementation Steps
- [ ] Define the `ReactionMapping` interface and a default configuration.
- [ ] Update the `messageReactionAdd` listener to use the mapping service.
- [ ] Implement logic to fetch the correct project ID based on the channel ID or guild ID.
- [ ] Pass the mapped type and project to the `YouTrackClient`.

## Acceptance Criteria
- [ ] Reacting with 🎫 creates a **Task** in the configured YouTrack project.
- [ ] Reacting with 🐛 creates a **Bug** in the configured YouTrack project.
- [ ] If an unknown emoji is used, the bot does nothing.
