import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai"

//import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

import { checkSubscription } from "@/lib/subscription";



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);



export async function POST(req:Request) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages  } = body;

        // Check for user auth
        if(!userId) {
            return new NextResponse("Unauthorized, ", { status: 401 });
        }
        //Check config of Api key
        if (!configuration.apiKey) {
            console.log("😑")
            return new NextResponse("OpenAI API Key not configured.", { status: 500 });
        }
        //Check if message has been passed
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        //CHECK"S & INCREASING COUNT 
        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }

        //api call
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages
        });

        //increaese the api limit - if not pro user 
        if (!isPro) {
            await incrementApiLimit();
        }

        //return data
        return NextResponse.json(response.data.choices[0].message);
        
    }catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}