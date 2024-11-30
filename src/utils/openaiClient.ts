import OpenAI from "openai";
import {Message} from "../pages/AskAIPage.tsx";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // This is required to use the API key in the browser
});

// This should be implemented in a backend service, not in the frontend
export const createCompletion = async (messages: Message[]) => {
  const completionMessages = messages.map((message) => ({
    role: message.isAI ? "assistant" : "user",
    content: [{type: "text", text: message.text}],
  }));

  console.log('completionMessages:', completionMessages);
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {role: "system", content: "You are a helpful assistant."},
      ...completionMessages,
    ],

  });

  return completion.choices[0].message.content;
}
