import React from "react";

interface HighlightTextProps {
  text: string;
  query: string;
}

export default function HighlightText({ text, query }: HighlightTextProps) {
  if (!text) return null;
  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return <>{text}</>;
  }

  // Escape special regex characters in the query
  const escapedQuery = trimmedQuery.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const matches = part.toLowerCase() === trimmedQuery.toLowerCase();
        return matches ? (
          <mark
            key={index}
            className="bg-emerald-505/25 dark:bg-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-medium rounded-sm px-0.5"
            style={{ contentVisibility: "auto" }}
          >
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </>
  );
}
