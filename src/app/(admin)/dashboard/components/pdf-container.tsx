/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import usePreviewStore from "../zustand/useFileStore";
import { Button } from "@/components/ui/button";
import pdfTextSplitter from "../actions/fileProcess";
import axios from "axios";

function PDFContainer() {
  const { preview } = usePreviewStore();

  const onPDFDispatcher = async () => {
    const { src } = preview!;
    if (src !== undefined) {
      // const response = pdfTextSplitter(file);
      // response.then((data) => console.log(data));
      const { data } = await axios.post("/api/file-upload", { src });
      console.log(data);
    }
  };

  return (
    <div
      key={preview?.id}
      className="w-full h-full grid grid-cols-[65%_35%] gap-6"
    >
      <div className="w-full h-full flex justify-center">
        {preview?.src && (
          <embed
            src={preview.src}
            type={preview.type}
            className="w-full h-full rounded-lg"
          />
        )}
      </div>
      <div className="w-full flex-flex-col gap-y-6">
        <header>
          <h2>{preview?.title}</h2>
          <p>{preview?.size}</p>
          <small>uploaded on</small>
        </header>
        <div className="pt-6">
          <Button
            type="button"
            disabled={preview === null}
            onClick={onPDFDispatcher}
          >
            Upload File
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PDFContainer;
