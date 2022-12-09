import { Configuration, OpenAIApi } from 'openai';

const configuration= new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";
const generateAction = async (req, res) => {
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.6,
    max_tokens: 333,
});

const basePromptOutput = baseCompletion.data.choices.pop();

res.status(200).json({ output: basePromptOutput });
};

export default generateAction;