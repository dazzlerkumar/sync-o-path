# SOP-005: Develop AI Prompt Templates for Summarization

## Description
Design and implement system prompts that transform raw Discord messages into professional YouTrack issue summaries and descriptions.

## Goals
- Create high-quality system prompts for "Task" and "Bug" types.
- Ensure the AI preserves critical metadata (links, code snippets, user mentions).
- Normalize the tone and formatting for YouTrack (Markdown).

## Technical Details
- **Module**: `src/ai/prompts.ts`
- **Templates**:
    - `BUG_REPORT_TEMPLATE`: Focuses on reproduction steps, expected vs actual.
    - `TASK_SUMMARY_TEMPLATE`: Focuses on deliverables and context.

## Implementation Steps
- [ ] Define prompt string constants in a dedicated module.
- [ ] Implement a `PromptManager` to inject message content into templates.
- [ ] Add logic to strip Discord-specific noise (e.g., bot commands, common fluff) before sending to AI.
- [ ] Test prompts with various "messy" Discord conversation samples.

## Acceptance Criteria
- [ ] AI-generated summaries are concise (under 100 characters).
- [ ] AI-generated descriptions follow a structured format (Context, Details, Action Items).
- [ ] **TDD**: Prompt formatting logic is fully tested.
