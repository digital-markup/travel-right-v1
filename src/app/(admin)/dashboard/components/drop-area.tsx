"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import usePreviewStore from "../zustand/useFileStore";

function DropArea() {
  const { setPreview } = usePreviewStore();

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();

      acceptedFiles.forEach((file) => {
        reader.onload = () => {
          const result = reader.result as string;

          const previewFile = {
            id: uuidv4(),
            title: file.name,
            size: file.size,
            type: file.type,
            src: result,
            file: file,
          } as Preview;

          setPreview(previewFile);
        };
        reader.readAsDataURL(file);
      });
    },
    [setPreview]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 10000000,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/webp": [],
      "image/png": [],
      "application/pdf": [],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default DropArea;
