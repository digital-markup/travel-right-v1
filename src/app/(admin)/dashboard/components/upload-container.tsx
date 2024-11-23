"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpToLine } from "lucide-react";
import Image from "next/image";
import React from "react";
import DropArea from "./drop-area";
import usePreviewStore from "../zustand/useFileStore";
import PDFContainer from "./pdf-container";

function UploadContainer() {
  return (
    <div>
      <Card className="max-w-sm">
        <CardContent>
          <div className="flex flex-col gap-y-6 pb-6">
            <div className="py-2 w-full h-full">
              <Image
                src={"/img/upload-img.svg"}
                width={400}
                height={400}
                alt={"upload"}
              />
            </div>
            <p className="text-center">
              Upload your documents for users to find the context that they are
              looking for.
            </p>
            {/* Modal */}
            <Modal />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Modal() {
  const { preview } = usePreviewStore();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ArrowUpToLine size={16} strokeWidth={2} />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl h-[896px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
        </DialogHeader>
        {preview ? <PDFContainer /> : <DropArea />}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
export default UploadContainer;
