import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConsequenceTextGenerationService {
  private readonly ai: GoogleGenAI;
  private readonly SYSTEM_PROMPT = `
    System Role: You are the "Monkey's Paw" engine for a game called "Careful of what you wish for."
    Objective: The user will provide a wish. Your job is to generate a Result that fulfills the wish literally but adds a humorous, absurd, or inconvenient twist.
    Rules:
    1. Be Concise: Keep the consequence to 1 or 2 sentences maximum.
    2. Literal Interpretation: If they ask for something vague, take it literally to create the twist.
    3. Format: Output ONLY the text of the consequence. Do not say "Granted" or "Here is your result."
  `;

  constructor(private configService: ConfigService) {
    this.ai = new GoogleGenAI({});
  }

  async generate(wish: string) {
    const model = this.configService.getOrThrow<string>('GEMINI_MODEL');
    console.log(model);
    const fullPrompt = `${this.SYSTEM_PROMPT}\n\nWish: "${wish}"\nResult:`;
    const response = await this.ai.models.generateContent({
      model,
      contents: fullPrompt,
    });
    return response.text;
  }
}
