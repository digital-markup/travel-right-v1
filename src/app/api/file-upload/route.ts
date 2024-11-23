import pdfTextSplitter from "@/app/(admin)/dashboard/actions/fileProcess";
import saveIndex from "@/app/(admin)/dashboard/db/query/saveIndex";
import getEmbeddings from "@/app/(admin)/dashboard/services/embedService";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        if (!body) {
            return new NextResponse("No body", { status: 400 });
        }

        const response = await pdfTextSplitter(body.src);
        if (!response) {
            return new NextResponse("No response", { status: 400 });
        }
        // embed the text to vectors
        const embeddings = await getEmbeddings(response[0].pageContent);
        // save to pinecone
        await saveIndex(embeddings, "pdf");

        return new NextResponse("Successfully processed", { status: 200 });

    } catch (error) {
        console.log("[PRODUCT-POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export { POST }