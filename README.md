
# Sync-o-path (SOP)

Sync-o-path is an AI-powered agent designed to automate the administrative overhead of software development. It listens to Discord voice meetings, monitors chat threads, and uses Gemini 1.5 Flash to instantly generate structured tasks, bug reports, and meeting summaries directly in our self-hosted YouTrack instance.


## Features
1. Post-Meeting "Auto-Scribe"
    - **Workflow:** Joins Discord voice channels during requirement syncs.
    - **Intelligence:** Transcribes audio and uses AI to extract Action Items, Owner Assignments, and Technical Constraints.
    - **Output:** Posts a summary in the text channel and creates a "Meeting Note" issue in YouTrack.
2. One-Click Ticketing (Emoji Triggers)
    - **Workflow:** Found a bug or a new requirement in a chat? Just react.
    - **Triggers:**
        - 🎫 → Creates a Task in YouTrack.
        - 🐛 → Creates a Bug with "Steps to Reproduce" extracted from the conversation.
    - **Context:** Automatically attaches the Discord thread link to the YouTrack ticket for 100% traceability.
3. Visual Bug Analysis
    - **Workflow:** PM posts a screenshot of a broken UI.
    - **Intelligence:** Uses Gemini Vision to analyze the image, describe the visual discrepancy, and suggest the affected React component or Next.js route.
    - **Output:** Populates the YouTrack ticket with a technical description of the visual error.

## Tech Stack
 - **Runtime:** Node.js (TypeScript)
 - **Bot Framework:** discord.js
 - **AI Engine:** Google Gemini 1.5 Flash (Text & Vision)
 - **Project Management:** YouTrack REST API
 - **Speech-to-Text:** OpenAI Whisper / Google Cloud Speech

## Roadmap
 [ ] Phase 1: messageReactionAdd listener for basic task creation.

 [ ] Phase 2: Gemini integration for automated description cleaning.

 [ ] Phase 3: Voice channel recording and transcription pipeline.

 [ ] Phase 4: Custom Dashboard for mapping Discord Users to YouTrack Profiles.


## Documentation
- [User Flow Documentation](docs/user-flow.md)
- [High-Level Architecture](docs/architecture-high-level.md)
- [Project Tasks & Tracking](docs/tasks.md)
- [Testing Strategy & TDD Workflow](docs/testing-strategy.md)

### Feature Specifications
- [Meeting Transcription Spec](docs/specs/meeting-transcription.spec.md)
- [One-Click Ticketing Spec](docs/specs/one-click-ticketing.spec.md)
- [Visual Bug Analysis Spec](docs/specs/visual-bug-analysis.spec.md)
