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



// const OpenAI = require("openai");

// const apiKey = process.env.Api_key; // Make sure you have the environment variable Api_key set with your API key.

// const openai = new OpenAI({
//   apiKey: apiKey
// });

// const openFun = async () => {
//   const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{ "role": "user", "content": "YOUR PROMPT TEXT" }],
//     max_tokens: 30
//   });
//   console.log(chatCompletion.choices[0].message.content);
// };

// openFun();
