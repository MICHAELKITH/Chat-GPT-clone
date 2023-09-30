import OpenAI, { APIConnectionError, APIConnectionTimeoutError, APIError, APIUserAbortError, AuthenticationError, BadRequestError, ConflictError, InternalServerError, NotFoundError, PermissionDeniedError, RateLimitError, UnprocessableEntityError, fileFromPath, toFile } from 'openai';

const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error('API key is missing. Make sure to set the API_KEY environment variable.');
}

const configuration = new OpenAI.Configuration({ apiKey: apiKey });
const openai = new OpenAI.OpenAIApi(configuration);

export async function sendMsgToApi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.data.choices[0].text;
}
