---
title: One-Click Ticketing Specification
version: 1.0
date_created: 2026-03-23
last_updated: 2026-03-23
owner: Sync-o-path Team
tags: [discord, reaction, ticketing, youtrack, process]
---

# Introduction

This specification defines the "One-Click Ticketing" feature, allowing users to create YouTrack tasks or bugs instantly by reacting to Discord messages.

## 1. Purpose & Scope

The purpose of this feature is to capture ad-hoc requirements or bug reports directly from project conversations in Discord, ensuring traceability without leaving the chat.

## 2. Definitions

- **Reaction Trigger**: A specific emoji (🎫, 🐛) that initiates ticket creation.
- **Traceability Link**: A URL in the YouTrack issue pointing back to the original Discord message.
- **SOP Bot**: The Sync-o-path bot instance monitoring Discord events.

## 3. Requirements, Constraints & Guidelines

- **REQ-001**: The system shall monitor `messageReactionAdd` events for configured trigger emojis.
- **REQ-002**: Reaction 🎫 shall create a YouTrack **Task**.
- **REQ-003**: Reaction 🐛 shall create a YouTrack **Bug**.
- **REQ-004**: The system shall extract the message content, author, and timestamp from the original Discord post.
- **REQ-005**: If the message belongs to a thread, the thread context shall be captured in the issue description.
- **CON-001**: Users must have appropriate permissions in the Discord server to trigger the bot.
- **PAT-001**: The bot must reply to the original message with the YouTrack issue ID and a clickable link.

## 4. Interfaces & Data Contracts

### Discord Event Payload
- **Message Author**: `author.username` / `author.id`
- **Content**: `content.text` (up to 2000 chars)
- **Reaction**: `emoji.name`

### YouTrack Issue Mapping
- **Project**: Target project based on Discord channel configuration.
- **Summary**: `Discord: {Author} - {First 50 chars of message}`
- **Description**: `Discord Author: {Author}\nDiscord Link: {Message_URL}\n\nContent: {Content}`

## 5. Acceptance Criteria

- **AC-001**: Given a developer posts a bug description, When a moderator reacts with 🐛, Then a bug issue is created in YouTrack.
- **AC-002**: Given a YouTrack ticket is created, When the process completes, Then the bot posts a confirmation message in Discord.
- **AC-003**: The YouTrack issue shall contain a direct link back to the Discord message for context.

## 6. Test Automation Strategy

- **Test Levels**: Unit tests for message parsing and integration tests for YouTrack API.
- **Frameworks**: Jest, Mock-Discord-Events.
- **Coverage**: 100% logic coverage for trigger-to-type mapping.

## 7. Rationale & Context

By allowing ticketing through reactions, we reduce the "context-switching" cost for developers and ensure no reported issue is lost in chat history.

## 8. Dependencies & External Integrations

### External Systems
- **EXT-001**: Discord Gateway - For event listening.
- **EXT-002**: YouTrack REST API - For ticket creation.

### Third-Party Services
- **SVC-001**: Optional: Gemini LLM for cleaning up raw message text into professional summaries.

## 9. Examples & Edge Cases

### Edge Case: Bot Reaction
The system must ignore reactions from the bot itself to prevent infinite loops.

### Edge Case: Missing Permissions
If the bot lacks permissions to post in a channel, it should attempt to DM the user who reacted (if configured).

## 10. Validation Criteria

- Correct issue type creation (Task vs Bug).
- Verification of author mapping (Discord ID to YouTrack User).
- Link integrity between Discord and YouTrack.
