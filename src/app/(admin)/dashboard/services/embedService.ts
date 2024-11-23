import { OpenAIEmbeddings } from "@langchain/openai";
// setup openai embeddings of langchain
export const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_KEY!,
    batchSize: 512,
    model: "text-embedding-ada-002",
});


// embed the text - PUBLIC
const getEmbeddings = async (text: string): Promise<number[]> => {
    const query = await embeddings.embedQuery(text);
    return query;
}

export default getEmbeddings