/* eslint-disable @typescript-eslint/no-explicit-any */
// pdf text splitter
"use server";

import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import base64ToBlob from "./base64toBlob";
import { Document } from "langchain/document";

const pdfTextSplitter = async (file: string): Promise<Document<Record<string, unknown>>[]> => {
    try {
        // convert string to blob
        const blob = await base64ToBlob(file);

        // load the pdf
        const pdfLoader = new WebPDFLoader(blob);
        const docs = await pdfLoader.load();

        // chucnk the documents
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });

        const chunkedDocs = await splitter.splitDocuments(docs);

        return chunkedDocs;
    } catch (error) {
        throw new Error("Error splitting PDF: " + error);
    }
}

export default pdfTextSplitter