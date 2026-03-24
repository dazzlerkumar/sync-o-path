# Testing Strategy & TDD Workflow

This document defines the Test-Driven Development (TDD) standards and technical testing architecture for the Sync-o-path (SOP) project.

## 1. Core Philosophy: Red-Green-Refactor

All development in this project follows the strict TDD cycle to ensure 100% requirement coverage and high code quality.

1.  **🔴 Red**: Write a failing test in a `*.test.ts` file that precisely defines a requirement from a `*.task.md` goal.
2.  **🟢 Green**: Write the minimum amount of functional code in the corresponding source file to make the test pass.
3.  **🔵 Refactor**: Clean up the implementation, optimize for performance, and ensure architectural alignment while keeping the test suite green.

## 2. Testing Stack

We utilize a modern, ESM-native testing stack designed for speed and compatibility with TypeScript.

- **Test Runner**: [Vitest](https://vitest.dev/)
    - **Rationale**: Native ESM/TypeScript support, Vite-based speed, and Jest-compatible API.
- **Mocking (Discord)**: `@shoginn/discordjs-mock`
    - **Rationale**: Provides pre-configured mocks for complex `discord.js` v14+ entities (Guilds, Members, Reactions).
- **Mocking (API)**: `vi.mock` (Vitest built-in)
    - **Rationale**: Used to simulate YouTrack and Gemini API responses.
- **Coverage**: `v8`
    - **Goal**: Maintain >80% branch coverage across core business logic.

## 3. Test Categorization

### Unit Tests (`src/**/*.test.ts`)
- **Scope**: Isolated functions, utility classes, and pure logic.
- **Requirement**: Must not make network calls or rely on external state.
- **Example**: Mapping a Discord emoji string to a YouTrack issue type.

### Integration Tests (`tests/integration/**/*.test.ts`)
- **Scope**: Interaction between two or more modules (e.g., Discord Client -> YouTrack Client).
- **Requirement**: Use mocks for external APIs but test the "glue" logic between internal services.
- **Example**: Verifying that a `messageReactionAdd` event correctly triggers a YouTrack issue creation call.

### E2E / Functional Tests (`tests/e2e/**/*.test.ts`)
- **Scope**: Complete user flows from entry to exit.
- **Requirement**: Simulates the entire pipeline. May use a sandbox/staging YouTrack instance.
- **Example**: An audio file is "posted" to a mock voice stream, and the system verifies a YouTrack ticket is eventually created with the correct summary.

## 4. Integration with Task Management

For every task defined in `docs/tasks/`, the implementation is not considered complete until:
1.  A corresponding test file exists.
2.  All goals in the task have associated `it()` or `test()` blocks.
3.  The CI/CD pipeline (or local `npm test`) passes with the new changes.

## 5. Commands

- `npm test`: Run all tests once.
- `npm run test:watch`: Run Vitest in interactive watch mode (recommended for development).
- `npm run test:coverage`: Generate a detailed coverage report in HTML/Text.
