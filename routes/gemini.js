import { GoogleGenerativeAI } from "@google/generative-ai";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()
const router = express.Router();
const apiKey = process.env.MY_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
router.get('/hi', (req, res) => {
    res.json("hi bro");
    console.log('API Key:', process.env.API_KEY);
});

router.post('/chat', async (req, res) => {
    // console.log('API Key:', apiKey);
    try {
        const userMessage = req.body.message;
        console.log('User message:', userMessage);

        // Logic to interact with the chatbot API
        const chatbotResponse = await callChatbotAPI(userMessage);
        
        res.json({ response: chatbotResponse });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error processing chatbot response' });
    }
});

async function callChatbotAPI(input) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const inputWithUnit = `${input} tonnes`;
    const prompt = `Use the numeric value and the unit mentioned in double quotes at the end of the prompt, this value is total carbon emission of a coal mine. Give suggestions based on this value and unit to minimize the carbon emission. give only text output "${inputWithUnit}"`;

    try {
        console.log('Prompt:', prompt);
        const result = await model.generateContent({
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        });
        const response = await result.response;

        // Extract and log the relevant parts of the response
        const content = response.candidates[0].content.parts[0].text;
        console.log('Generated Content:', content);

        // Return the generated content
        return content;
    } catch (error) {
        console.error('API Request Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}


export default router;
