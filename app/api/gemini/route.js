import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    // Extract prompt from request body
    const { prompt } = await req.json();

    // Initialize the GoogleGenAI client
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Generate content from Gemini model
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // or "gemini-2.0-flash"
      contents: prompt,
    });

    // Assuming the response is a string, returning it as JSON
    return new Response(JSON.stringify({ response: response }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Gemini error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to get AI response" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Handle GET requests for testing server
export async function GET() {
  try {
    return new Response(
      JSON.stringify({ message: "Gemini API server is working fine!" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error with GET request:", err);
    return new Response(
      JSON.stringify({ error: "Failed to respond to GET request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
