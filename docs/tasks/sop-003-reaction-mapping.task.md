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
- [ ] Define the `ReactionMapping` interface.
- [ ] Write unit tests for the mapping logic (Emoji -> Issue Type).
- [ ] Implement the mapping service.
- [ ] Update the `messageReactionAdd` listener to use the mapping service.

## Acceptance Criteria
- [ ] Reacting with 🎫 creates a **Task** in YouTrack.
- [ ] Reacting with 🐛 creates a **Bug** in YouTrack.
- [ ] **TDD**: All mapping unit tests pass, covering edge cases (invalid emojis).
