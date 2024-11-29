"use client";

import { Button } from "../ui/button";
import copy from "copy-to-clipboard";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function handleCopy(text: string) {
  copy(text);
  enqueueSnackbar("Email copied!", {
    autoHideDuration: 2000,
    anchorOrigin: { horizontal: "center", vertical: "bottom" },
  });
}

export default function CopyText({ text }: { text: string }) {
  return (
    <>
      <div className="flex items-center border gap-1 rounded-full p-1">
        <span className="px-3 text-sm">{text}</span>
        <Button
          variant='outline'
          onClick={() => handleCopy(text)}
          className="rounded-full outline-none"
        >
          Copy
        </Button>
      </div>
      <SnackbarProvider />
    </>
  );
}
