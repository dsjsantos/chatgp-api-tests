// This code is for v4 of the openai package: npmjs.com/package/openai
const OpenAI = require('openai');

class openai {
    static configuration() {
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    static textCompletion({ prompt }) {
        return {
            model: "gpt-3.5-turbo",
            prompt: `${prompt}`,
            messages: [
              {
                "role": "user",
                "content": ""
              }
            ],
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}

module.exports = openai;