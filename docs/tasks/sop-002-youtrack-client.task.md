# SOP-002: Implement YouTrack REST Client

## Description
Develop a reusable YouTrack API client using `axios` or `node-fetch` to handle issue creation and data mapping.

## Goals
- Securely authenticate with the YouTrack REST API using a Permanent Token.
- Implement a method for creating new issues in a specific project.
- Map Discord author info and message content to YouTrack fields.

## Technical Details
- **Module**: `src/youtrack/api.ts`
- **API Endpoint**: `/api/issues`
- **Authentication**: `Authorization: Bearer <TOKEN>`

## Implementation Steps
- [ ] Set up environment variables for YouTrack URL and Token.
- [ ] Write failing unit tests for `YouTrackClient` using Vitest.
- [ ] Implement `YouTrackClient` class with a `createIssue` method.
- [ ] Implement error handling for API failures.
- [ ] Confirm tests pass with mock data.

## Acceptance Criteria
- [ ] Successfully create a test ticket in YouTrack via script.
- [ ] **TDD**: 100% test coverage for API request mapping and error handling logic.
