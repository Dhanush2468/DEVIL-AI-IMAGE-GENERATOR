import express from "express";
import * as dotenv from "dotenv";
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: 'Hello from DEVIL-AI!' });
  
});

router.route('/').post(async(req, res) =>  {
    try{
        const {prompt} = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size:'1024x1024',
            response_format: "b64__json",
        });

        const image = aiResponse.data.data[0].b64__json;

        res.status(200).json({photo: image });
    }catch(error){
        console.log(error)
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
});

export default router;
