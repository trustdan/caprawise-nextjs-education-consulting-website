'use client'
import { ChevronDownIcon } from '@heroicons/react/solid';
import useQA from '../hooks/useQA';

type QAProps = {
  question: {
      en: string;
      tr: string;
  };
  answer: {
      en: string;
      tr: string;
  }
};

export default function QA({ question, answer }: QAProps){
  const { isOpen, setIsOpen, language } = useQA();
  return (
    <div className="border-b rounded-md p-5 ">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{language==="en" ? question.en : question.tr}</h3>
        <ChevronDownIcon
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } w-5 h-5 text-gray-500 transition-all duration-300 ease-linear`}
        />
      </div>
      {isOpen && <p className="mt-4">{language==="en" ? answer.en : answer.tr}</p>}
    </div>
  );
};
