"use client";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useQA from "../hooks/useQA";

type QAProps = {
  question: {
    en: string;
    tr: string;
  };
  answer: {
    en: string;
    tr: string;
  };
};

export default function QA({ question, answer }: QAProps) {
  const { isOpen, setIsOpen, language, QARef } = useQA();

  return (
    <div
      className="bg-LIGHT_SECONDARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR border-b dark:border-gray-800 rounded-md p-5 mb-2 mx-5 shadow-lg dark:text-white transition-colors ease-linear duration-200 hover:shadow-xl cursor-pointer"
      ref={QARef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center transition-all duration-200 ease-linear">
        <h3 className="text-lg font-medium">
          {language === "en" ? question.en : question.tr}
        </h3>
        <ChevronDownIcon
          className={`${
            isOpen ? "transform rotate-180" : ""
          } w-5 h-5 text-gray-500 transition-all duration-300 ease-linear`}
        />
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-600">
          {language === "en" ? answer.en : answer.tr}
        </p>
      )}
    </div>
  );
}
