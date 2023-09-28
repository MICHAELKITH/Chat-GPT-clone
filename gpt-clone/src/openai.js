const { Configuration, OpenAIApi } = require('openai');
const apiKey = process.env.Api_key;
const conf = new Configuration({ apiKey: apiKey });
const openai = new OpenAIApi(conf);

export async function sendMsgToApi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message, // Corrected from "promt"
    temperature: 0.7,
    max_tokens: 256, // Corrected from "maxTokens"
    top_p: 1, // Corrected from "topP"
    frequency_penalty: 0, // Corrected from "frequencyPenalty"
    presence_penalty: 0, // Corrected from "presencePenalty"
  });

  return res.data.choices[0].text;
}


