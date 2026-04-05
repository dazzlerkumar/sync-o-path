# SOP-004: Integrate Gemini 1.5 Flash API

## Description
Set up the infrastructure to communicate with Google's Gemini 1.5 Flash API. This includes client initialization, configuration management, and basic request/response handling.

## Goals
- Initialize the Google Generative AI SDK.
- Securely manage the Gemini API key via environment variables.
- Implement a reusable AI service wrapper for the project.
- Handle API authentication and basic connectivity checks.

## Technical Details
- **Module**: `src/ai/gemini-client.ts`
- **Dependencies**: `@google/generative-ai`, `dotenv`
- **Model**: `gemini-1.5-flash`

## Implementation Steps
- [ ] Install `@google/generative-ai` dependency.
- [ ] Add `GEMINI_API_KEY` to `.env.example` and validate its presence at runtime.
- [ ] Create `GeminiClient` class with a `generateText` method.
- [ ] Implement robust error handling for API failures (network issues, invalid keys).
- [ ] Write unit tests with mocked API responses.

## Acceptance Criteria
- [ ] Successfully retrieves a response from a "Hello World" prompt in a test script.
- [ ] Gracefully handles missing API keys with helpful error messages.
- [ ] **TDD**: 100% test coverage for the client wrapper.
