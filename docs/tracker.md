# Project Tasks & Tracking

This document tracks the progress of the Sync-o-path (SOP) development. Each task is defined in detail in its respective `.task.md` file in the `docs/tasks/` directory.

**Note on TDD**: All tasks must follow the [Testing Strategy](testing-strategy.md). No task is considered complete without accompanying unit and/or integration tests.

## Phase 1: One-Click Ticketing Foundation
Focus: core Discord reaction listener and basic YouTrack API integration.

- [x] [SOP-001: Set up Discord Bot and Reaction Listener](tasks/sop-001-discord-setup.task.md)
- [x] Implement Discord Slash Commands Foundation (/help, /join, /create-issue, etc.)
- [x] [SOP-002: Implement YouTrack REST Client](tasks/sop-002-youtrack-client.task.md)
- [ ] [SOP-003: Map Reaction Emojis to YouTrack Issue Types](tasks/sop-003-reaction-mapping.task.md)


## Phase 2: Gemini AI Integration
Focus: Enhancing raw input with AI-driven summaries and cleaning.

- [ ] [SOP-004: Integrate Gemini 1.5 Flash API](tasks/sop-004-gemini-integration.task.md)
- [ ] [SOP-005: Develop AI Prompt Templates for Summarization](tasks/sop-005-prompt-templates.task.md)
- [ ] [SOP-013: Orchestrate AI Processing in Ticketing Flow](tasks/sop-013-ai-orchestration.task.md)
- [ ] [SOP-014: AI Quality Assurance & Testing](tasks/sop-014-ai-testing.task.md)

## Phase 3: Voice Transcription Pipeline
Focus: Real-time audio capture and processing.

- [ ] [SOP-006: Discord Voice Receive and Audio Capture](tasks/sop-006-voice-capture.task.md)
- [ ] [SOP-007: Speech-to-Text (STT) Service Integration](tasks/sop-007-stt-integration.task.md)
- [ ] [SOP-008: Meeting Summary and Action Item Extraction](tasks/sop-008-meeting-summary.task.md)

## Phase 4: Visual Bug Analysis
Focus: Multimodal analysis of UI screenshots.

- [ ] [SOP-009: Screenshot Detection and Processing](tasks/sop-009-screenshot-detection.task.md)
- [ ] [SOP-010: Visual Defect Analysis with Gemini Vision](tasks/sop-010-visual-analysis.task.md)

## Phase 5: Administration & Mapping
Focus: User identity mapping and system dashboard.

- [ ] [SOP-011: User Mapping (Discord ID to YouTrack User)](tasks/sop-011-user-mapping.task.md)
- [ ] [SOP-012: Deployment & Monitoring Setup](tasks/sop-012-deployment-setup.task.md)
