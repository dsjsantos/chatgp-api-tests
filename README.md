# Chat GPT API Testes
Chat GPT API Testes

## Server
Expects some environment variables:

- **OPENAI_API_KEY:** OpenAI API Key (required to access OpenAI API, may be empty if 'TEST_RESPONSE' is set to true)
- **PORT:** Server port (default: 5555)
- **TEST_RESPONSE:** If set and it is "true" the server API will not make a call to OpenAI API, it will answer with an internal test message