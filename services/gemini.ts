
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartProductDescription = async (productName: string, category: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a luxury, poetic, 2-sentence marketing description for a Peshawari Chapple named "${productName}" in the "${category}" category. Focus on heritage and modern elegance. Use English.`,
    });
    return response.text || "Crafted for excellence, stepping into tradition with unparalleled luxury.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A masterpiece of traditional craftsmanship redefined for the modern gentleman.";
  }
};

export const getFashionAdvice = async (productName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide 3 short bullet points on how to style "${productName}" Peshawari Chapples for a formal or casual event. Keep it brief and high-end.`,
    });
    return response.text || "Style with a crisp white Shalwar Kameez for a classic look.";
  } catch (error) {
    return "Pairs perfectly with traditional attire or slim-fit denim for a fusion look.";
  }
};
