# SOP-013: Orchestrate AI Processing in Ticketing Flow

## Description
Integrate the Gemini AI service into the core ticketing workflow. When a reaction is detected, the message should pass through the AI before being sent to YouTrack.

## Goals
- Connect the Discord listener to the AI service.
- Implement parallel processing: Fetch message context and send to Gemini.
- Update the YouTrack issue creation logic to use AI-enhanced fields.

## Technical Details
- **Module**: `src/orchestrator/ticketing-flow.ts`
- **Flow**: `Reaction -> Get Message Content -> AI Summarization -> YouTrack Creation -> Discord Feedback`

## Implementation Steps
- [ ] Modify the `ReactionHandler` to invoke the `GeminiClient`.
- [ ] Ensure the original Discord URL is still preserved in the final ticket.
- [ ] Implement a "Raw" fallback: if AI fails, proceed with the basic extractor.
- [ ] Add logging for AI processing time and usage.

## Acceptance Criteria
- [ ] Reacting to a long Discord message creates a well-summarized YouTrack ticket.
- [ ] The YouTrack ticket contains a "Summarized by Sync-o-path AI" footer.
- [ ] **TDD**: Integration tests verify the end-to-end flow from reaction to AI-enhanced ticket.
