import { api } from "../utils/api.ts";

export const getResponseOpenAi = async (prompt: string): Promise<string> => {
    try {
        const response = await api.post('/open-ai', { prompt });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Unknown error occurred while fetching GPT response');
        }
    }
};
