import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

export class GeminiClient {
    private readonly model: GenerativeModel;

    constructor() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY environment variable is missing');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    }

    async generateText(prompt: string): Promise<string> {
        try {
            const result = await this.model.generateContent(prompt);
            const response = result.response;
            return response.text();
        } catch (error: any) {
            console.error('[Gemini API] Error:', error);
            throw new Error(`Gemini API Error: ${error?.message || 'Unknown error'}`);
        }
    }
}
