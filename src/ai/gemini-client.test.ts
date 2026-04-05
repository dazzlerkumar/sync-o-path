import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { GeminiClient } from './gemini-client.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

vi.mock('@google/generative-ai', () => {
    const generateContentMock = vi.fn();
    const MockGoogleGenerativeAI = vi.fn().mockImplementation(function() {
        return {
            getGenerativeModel: vi.fn(() => ({
                generateContent: generateContentMock
            }))
        };
    });
    return {
        GoogleGenerativeAI: MockGoogleGenerativeAI,
        _generateContentMock: generateContentMock
    };
});

describe('GeminiClient', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        process.env = { ...originalEnv, GEMINI_API_KEY: 'test-api-key' };
        vi.clearAllMocks();
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it('should throw an error if GEMINI_API_KEY is not set', () => {
        delete process.env.GEMINI_API_KEY;
        expect(() => new GeminiClient()).toThrow('GEMINI_API_KEY environment variable is missing');
    });

    it('should initialize successfully with a valid API key', () => {
        expect(() => new GeminiClient()).not.toThrow();
        expect(GoogleGenerativeAI).toHaveBeenCalledWith('test-api-key');
    });

    it('should successfully generate text from a prompt', async () => {
        const client = new GeminiClient();
        const mockResponse = {
            response: {
                text: () => 'Hello, world!'
            }
        };
        
        // Use the internal mock to resolve the promise
        const { _generateContentMock } = await import('@google/generative-ai') as any;
        _generateContentMock.mockResolvedValue(mockResponse);

        const result = await client.generateText('Say hello');
        expect(result).toBe('Hello, world!');
        expect(_generateContentMock).toHaveBeenCalledWith('Say hello');
    });

    it('should throw an error when API call fails', async () => {
        const client = new GeminiClient();
        
        const { _generateContentMock } = await import('@google/generative-ai') as any;
        _generateContentMock.mockRejectedValue(new Error('API failure'));

        await expect(client.generateText('Say hello')).rejects.toThrow('Gemini API Error: API failure');
    });
});
