// Creates a standalone question from the chat-history and the current question
const BASE_TEMPLATE = `You are an enthusiastic AI assistant. Use the following pieces of context to answer the question at the end.
If you cannot find the answer, just say you are not updated with that information and provide some information about the context through web search. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:`;

// Refers to the history of previous questions and answers
const STANDALONE_TEMPLATE = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

export { BASE_TEMPLATE, STANDALONE_TEMPLATE };