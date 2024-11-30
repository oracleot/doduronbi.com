"use client";

import { Button } from "../ui/button";
import copy from "copy-to-clipboard";

function handleCopy(text: string) {
  copy(text);
  alert('Email copied!');
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
    </>
  );
}
