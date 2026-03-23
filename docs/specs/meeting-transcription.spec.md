---
title: Meeting Transcription & Auto-Scribe Specification
version: 1.0
date_created: 2026-03-23
last_updated: 2026-03-23
owner: Sync-o-path Team
tags: [voice, ai, transcription, youtrack, discord]
---

# Introduction

This specification defines the functional and technical requirements for the "Meeting Transcription" feature, which captures Discord voice channel audio and transforms it into structured YouTrack issues.

## 1. Purpose & Scope

The purpose of this feature is to automate the documentation of software requirements and action items discussed during voice meetings. It covers the entire lifecycle from audio capture to issue creation.

## 2. Definitions

- **STT**: Speech-to-Text.
- **LLM**: Large Language Model (Gemini 1.5 Flash).
- **Audio Chunking**: The process of dividing a continuous audio stream into smaller, processable segments.
- **SOP**: Sync-o-path system.

## 3. Requirements, Constraints & Guidelines

- **REQ-001**: The system shall join a Discord voice channel when a meeting trigger is detected.
- **REQ-002**: The system shall capture audio from multiple speakers and maintain spatial separation where possible.
- **REQ-003**: Audio shall be transcribed with at least 90% accuracy for clear speech.
- **REQ-004**: The LLM shall extract Action Items, Owners, and Technical Constraints from the transcript.
- **REQ-005**: A YouTrack issue of type "Meeting Note" shall be created with the summarized output.
- **SEC-001**: Voice data shall not be persisted beyond the transcription and summarization process.
- **CON-001**: Real-time transcription latency must not exceed 30 seconds for a 5-minute meeting segment.

## 4. Interfaces & Data Contracts

### Audio Capture Interface (Discord)
- **Input**: Discord Voice Receive Stream (Opus/PCM).
- **Trigger**: `!sop-start` command or scheduled event.

### AI Processing Contract
- **Request**: `{ "transcript": string, "prompt": string }`
- **Response**: `{ "summary": string, "action_items": [{ "task": string, "owner": string }], "constraints": [string] }`

### YouTrack Issue Schema
- **Project ID**: Defined in environment.
- **Summary**: `[Meeting] {Date} - {Context}`
- **Description**: Markdown formatted transcript summary and action items.

## 5. Acceptance Criteria

- **AC-001**: Given a user is in a Discord voice channel, When they issue the start command, Then the bot joins and begins recording.
- **AC-002**: Given a 10-minute meeting with 3 participants, When the meeting ends, Then a YouTrack ticket is created within 2 minutes.
- **AC-003**: The system shall provide a Discord notification with a direct link to the created YouTrack issue.

## 6. Test Automation Strategy

- **Test Levels**: Integration tests for STT and LLM services.
- **Frameworks**: Jest, Discord.js-mock (if available).
- **Test Data Management**: Recorded sample audio files for regression testing.
- **CI/CD Integration**: Automated mock-based tests in the pipeline.

## 7. Rationale & Context

The feature addresses the common problem of forgotten action items and lost context from verbal discussions. Using Gemini 1.5 Flash allows for high-context understanding of technical discussions.

## 8. Dependencies & External Integrations

### External Systems
- **EXT-001**: Discord API - Real-time voice and event gateway.
- **EXT-002**: YouTrack REST API - Issue management and documentation.

### Third-Party Services
- **SVC-001**: Google Gemini 1.5 Flash - Summarization and extraction.
- **SVC-002**: OpenAI Whisper or Google Cloud STT - Audio transcription.

### Infrastructure Dependencies
- **INF-001**: FFmpeg - Audio processing and transcoding.

## 9. Examples & Edge Cases

### Edge Case: Silent Meeting
If no speech is detected for 5 minutes, the bot should automatically disconnect and post a "No audio detected" message.

### Edge Case: Rapid Speaker Switching
The transcription logic must use Discord's speaker ID to differentiate between participants in the transcript.

## 10. Validation Criteria

- Successful join/leave cycles.
- Correct mapping of owners to YouTrack users.
- Verification of data deletion post-processing.
