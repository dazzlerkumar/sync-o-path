# User Flow Documentation

This document outlines the primary user interaction paths within the Sync-o-path system, focusing on the integration between Discord and YouTrack.

## 1. Meeting Transcription Flow

**Description**: Automates the process of capturing, transcribing, and documenting Discord voice meetings as YouTrack issues.

### Flow Diagram

```mermaid
graph TD
    A[User Joins Discord Voice Channel] --> B[Bot Starts Recording/Streaming]
    B --> C[Meeting Concludes / User Leaves]
    C --> D[Audio Processed by Transcription Service]
    D --> E[Summary and Action Items Generated]
    E --> F[YouTrack Issue Created with Transcript & Summary]
    F --> G[Discord Notification with YouTrack Link]
```

---

## 2. One-Click Ticketing Flow

**Description**: Enables rapid task or bug creation directly from Discord messages using reactions.

### Flow Diagram

```mermaid
graph TD
    A[User Posts Message in Discord] --> B[Moderator/User Reacts with Ticket Emoji]
    B --> C[Bot Detects Reaction]
    C --> D[Bot Extracts Message Content & Context]
    D --> E[YouTrack Task/Bug Created]
    E --> F[Bot Replies to Message with Ticket ID & Link]
```

---

## 3. Visual Bug Analysis Flow

**Description**: Streamlines the reporting of visual bugs from screenshots to technical suggestions and formal ticketing.

### Flow Diagram

```mermaid
graph TD
    A[User Posts Screenshot in Discord] --> B[Bot Identifies Image Attachment]
    B --> C[Visual Analysis Engine Processes Image]
    C --> D[Bot Suggests Technical Root Cause in Discord]
    D --> E[User/Dev Confirms Suggestion]
    E --> F[YouTrack Ticket Created with Screenshot & Technical Analysis]
    F --> G[Status Update in Discord Thread]
```

---

## 4. Slash Commands Flow

**Description**: Provides direct interaction with the bot via Discord slash commands for various project management tasks (e.g., `/create-issue`, `/standup`, `/sprint`).

### Flow Diagram

```mermaid
graph TD
    A[User Types /command in Discord] --> B[Discord Presents Command Options]
    B --> C[User Fills Options and Submits]
    C --> D[Bot Receives Command Interaction]
    D --> E[Bot Processes Action]
    E --> F[Bot Replies with Result/Confirmation]
```
