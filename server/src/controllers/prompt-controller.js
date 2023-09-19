const openai = require('../config/openai');
const inputPrompt = require('../models/input-prompt');

module.exports = {
    async sendText(request, response) {
        const openaiAPI = openai.configuration();
        const inputModel = new inputPrompt(request.body);
        const testResponse = process.env.TEST_RESPONSE || false;

        // Fake Response (only for tests)
        if (testResponse==="true") {
            return response.status(200).json({
                success: true,
                data: `Resposta de teste (sem chaamda à API ChatGPT):\nPergunta original: ${request.body?.prompt || "<EMPTY>"}`
            });
        }

        try {
            const completionConfig = openai.textCompletion(inputModel);
            const res = await openaiAPI.chat.completions.create(completionConfig);

            return response.status(200).json({
                success: true,
                data: res.data.choices[0].text
            });
        } catch (err) {
            console.log("[ERROR]", err);
            const status = err.status || 400;
            const errorMessage = err?.error?.message || "There was a unexpected error processing your request";
            return response.status(status).json({
                success: false,
                response: err.response ? err.response : null,
                errorMessage
            });
        }
    }
}