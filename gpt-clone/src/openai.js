const { Configuration, OpenAIApi } = require('openai');

const conf = new Configuration({ apiKey: "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" });
const openai = new OpenAIApi(conf);

export async function sendMsgToApi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message, // Corrected from "promt"
    temperature: 0.7,
    maxTokens: 256, // Corrected from "max_token"
    topP: 1, // Corrected from "top_p"
    frequencyPenalty: 0, // Corrected from "frequency_penalty"
    presencePenalty: 0, // Corrected from "presence_penalty"
  });

  return res.data.choices[0].text;
}
