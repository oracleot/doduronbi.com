"use client";

import useClipboard from "@/hooks/useClipboard";
import { Button } from "../ui/button";

export default function CopyButton({ text }: { text: string }) {
  const { copyToClipboard } = useClipboard();

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <>
      <div className="flex items-center border gap-1 rounded-full p-1">
        <span className="px-3 text-sm">{text}</span>
        <Button
          variant='outline'
          onClick={handleCopy}
          className="rounded-full outline-none"
        >
          Copy
        </Button>
      </div>
    </>
  );
}
