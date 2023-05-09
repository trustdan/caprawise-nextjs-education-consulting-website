"use client";
import React from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useFootnotes } from "../hooks/useFootnotes";

interface FootnotesProps {
  footnotes: {
    en: string;
    tr: string;
  }[];
}

export default function Footnotes({ footnotes }: FootnotesProps) {
  const language = useLanguageContext().language;
  const { footnotesRef } = useFootnotes();

  return (
    <div
      className=" dark:text-white text-[10px] my-5 w-[390px] lg:p-0  md:w-full "
      ref={footnotesRef}
    >
      <ol className="list-decimal list-inside">
        {footnotes.map((footnote, index) => (
          <li key={index} className="mb-1">
            {language === "en" ? footnote.en : footnote.tr}
          </li>
        ))}
      </ol>
    </div>
  );
}
