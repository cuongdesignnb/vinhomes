"use client";

import { useState } from "react";
import { Globe, Briefcase, Link2 } from "lucide-react";

interface ArticleShareProps {
  title: string;
  slug: string;
}

export function ArticleShare({ slug }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : `/${slug}`;

  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleLinkedIn() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleFacebook}
        aria-label="Chia sẻ qua Facebook"
        className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <Globe className="size-4" />
      </button>

      <button
        type="button"
        onClick={handleLinkedIn}
        aria-label="Chia sẻ qua LinkedIn"
        className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <Briefcase className="size-4" />
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Sao chép liên kết"
          className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <Link2 className="size-4" />
        </button>

        {copied && (
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#08254D] px-3 py-1 text-xs text-white shadow-lg">
            Đã sao chép
          </span>
        )}
      </div>
    </div>
  );
}
