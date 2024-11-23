import createChatChain from "@/app/(admin)/dashboard/services/chatChain";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        if (!body) {
            return new NextResponse("No body", { status: 400 });
        }

        const response = await createChatChain(body.message);

        return new NextResponse(JSON.stringify(response), {
            status: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            statusText: "OK"
        });

    } catch (error) {
        console.log("[PRODUCT-POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export { POST }