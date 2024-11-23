/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { randomUUID } from "crypto";
import getIndex from "../client";

const saveIndex = async (embeddings: number[], metaType: string) => {
    const index = await getIndex();
    await index.namespace('pdf-index').upsert([
        { id: randomUUID(), values: embeddings }
    ]);
};

export default saveIndex;