/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { OpenAIEmbeddings } from "@langchain/openai";
import getIndex from "../db/client";
import { PineconeStore } from "@langchain/pinecone";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { BASE_TEMPLATE } from "../shared/templates";
import { streamingChatModel } from "./gptModelService";

const createChatChain = async (query: string) => {
    try {
        const index = await getIndex();
        const vectorStore = await PineconeStore.fromExistingIndex(
            new OpenAIEmbeddings({
                apiKey: process.env.OPENAI_KEY!,
                batchSize: 512,
                model: "text-embedding-ada-002",
            }),
            { pineconeIndex: index, namespace: "pdf-index", maxConcurrency: 10 }
        );

        // perform a similarity search to find the most relevant documents
        const docs = vectorStore.asRetriever({
            searchType: "similarity",
            k: 10,
        });

        // retrive the documents from the vector store
        const retrievedDocs = await docs.invoke(query);
        console.log(retrievedDocs);

        if (!retrievedDocs || retrievedDocs.length === 0) {
            throw new Error("No documents found");
        }

        // get prompt
        const prompt = ChatPromptTemplate.fromTemplate(BASE_TEMPLATE);

        // constructing the chain
        const chain = RunnableSequence.from([
            { context: docs, question: async (input) => input },
            prompt,
            streamingChatModel,
            new StringOutputParser()
        ]);

        const response = await chain.invoke(query);
        return response;
        
    } catch (error) {
        throw new Error("Error creating chat chain: " + error);
    }
}

export default createChatChain;